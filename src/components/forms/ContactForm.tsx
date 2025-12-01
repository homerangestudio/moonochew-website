'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const subjects = [
    'General Inquiry',
    'Product Information',
    'Bulk Order',
    'Partnership Opportunity',
    'Support',
    'Other',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setErrorMessage('Please enter your first name');
      return false;
    }
    if (!formData.lastName.trim()) {
      setErrorMessage('Please enter your last name');
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.subject) {
      setErrorMessage('Please select a subject');
      return false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Please enter a message (at least 10 characters)');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setErrorMessage('');

    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit message');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or email us directly.');
      console.error('Contact form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-cream font-semibold mb-2">
            First Name <span className="text-ochre">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-paddock-dark text-cream rounded-lg border border-mulch focus:outline-none focus:border-ochre transition-colors"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-cream font-semibold mb-2">
            Last Name <span className="text-ochre">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-paddock-dark text-cream rounded-lg border border-mulch focus:outline-none focus:border-ochre transition-colors"
            placeholder="Smith"
          />
        </div>
      </div>

      {/* Contact Fields */}
      <div>
        <label htmlFor="email" className="block text-cream font-semibold mb-2">
          Email Address <span className="text-ochre">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-paddock-dark text-cream rounded-lg border border-mulch focus:outline-none focus:border-ochre transition-colors"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-cream font-semibold mb-2">
          Phone Number <span className="text-sandstone text-sm font-normal">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-paddock-dark text-cream rounded-lg border border-mulch focus:outline-none focus:border-ochre transition-colors"
          placeholder="+61 4XX XXX XXX"
        />
      </div>

      {/* Subject Dropdown */}
      <div>
        <label htmlFor="subject" className="block text-cream font-semibold mb-2">
          Subject <span className="text-ochre">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-paddock-dark text-cream rounded-lg border border-mulch focus:outline-none focus:border-ochre transition-colors cursor-pointer"
        >
          <option value="" disabled>Select a subject...</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-cream font-semibold mb-2">
          Message <span className="text-ochre">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-paddock-dark text-cream rounded-lg border border-mulch focus:outline-none focus:border-ochre transition-colors resize-none"
          placeholder="Tell us how we can help you..."
          minLength={10}
        />
        <p className="text-sandstone text-sm mt-1">
          {formData.message.length} characters
        </p>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-gum-leaf/20 border border-gum-leaf text-cream px-6 py-4 rounded-lg">
          <p className="font-semibold">Message sent successfully!</p>
          <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-ochre/20 border border-ochre text-cream px-6 py-4 rounded-lg">
          <p className="font-semibold">Error</p>
          <p className="text-sm mt-1">{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-ochre text-eucalyptus-night px-8 py-4 rounded-lg font-bold text-lg hover:bg-gum-leaf hover:text-cream transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
