'use client';

import { useState, FormEvent } from 'react';

interface OrderFormProps {
  paymentEnabled?: boolean;
}

export default function OrderForm({ paymentEnabled = false }: OrderFormProps) {
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const basePrice = 250;
  const totalPrice = basePrice * quantity;

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number');
      return false;
    }
    if (!formData.address.trim()) {
      setErrorMessage('Please enter your shipping address');
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
          type: 'order',
          quantity,
          totalPrice,
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit order');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        notes: '',
      });
      setQuantity(1);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to submit order. Please try again or contact us directly.');
      console.error('Order submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Quantity Selector */}
      <div className="bg-paddock-dark p-6 rounded-lg border border-mulch">
        <label className="block text-cream font-semibold mb-3">Quantity</label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
            className="w-12 h-12 bg-mulch text-cream rounded-lg hover:bg-ochre hover:text-eucalyptus-night transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-mulch disabled:hover:text-cream text-xl font-bold"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (val >= 1 && val <= 99) setQuantity(val);
            }}
            min="1"
            max="99"
            className="w-20 h-12 bg-mulch text-cream text-center rounded-lg border border-granite focus:outline-none focus:border-ochre text-lg font-semibold"
            aria-label="Quantity"
          />
          <button
            type="button"
            onClick={() => handleQuantityChange(1)}
            disabled={quantity >= 99}
            className="w-12 h-12 bg-mulch text-cream rounded-lg hover:bg-ochre hover:text-eucalyptus-night transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-mulch disabled:hover:text-cream text-xl font-bold"
            aria-label="Increase quantity"
          >
            +
          </button>
          <div className="ml-auto text-right">
            <div className="text-sandstone text-sm">Total</div>
            <div className="text-ochre text-2xl font-bold">${totalPrice} AUD</div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <label htmlFor="name" className="block text-cream font-semibold mb-2">
          Full Name <span className="text-ochre">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-paddock-dark text-cream rounded-lg border border-mulch focus:outline-none focus:border-ochre transition-colors"
          placeholder="John Smith"
        />
      </div>

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
          Phone Number <span className="text-ochre">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-paddock-dark text-cream rounded-lg border border-mulch focus:outline-none focus:border-ochre transition-colors"
          placeholder="+61 4XX XXX XXX"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-cream font-semibold mb-2">
          Shipping Address <span className="text-ochre">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-paddock-dark text-cream rounded-lg border border-mulch focus:outline-none focus:border-ochre transition-colors resize-none"
          placeholder="123 Main Street&#10;Suburb, State, Postcode&#10;Country"
        />
      </div>

      <div>
        <label htmlFor="notes" className="block text-cream font-semibold mb-2">
          Order Notes <span className="text-sandstone text-sm font-normal">(Optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 bg-paddock-dark text-cream rounded-lg border border-mulch focus:outline-none focus:border-ochre transition-colors resize-none"
          placeholder="Any special requests or delivery instructions..."
        />
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-gum-leaf/20 border border-gum-leaf text-cream px-6 py-4 rounded-lg">
          <p className="font-semibold">Order request submitted successfully!</p>
          <p className="text-sm mt-1">We'll contact you shortly to confirm your order and arrange payment.</p>
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
        {isSubmitting ? 'Submitting...' : paymentEnabled ? 'Proceed to Payment' : 'Submit Order Request'}
      </button>

      <p className="text-sandstone text-sm text-center">
        {paymentEnabled
          ? 'You will be redirected to secure payment after submitting this form.'
          : 'We\'ll contact you to confirm your order and arrange payment.'}
      </p>
    </form>
  );
}
