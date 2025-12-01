'use client';

import { useState, FormEvent, useCallback } from 'react';
import Turnstile from './Turnstile';

interface OrderFormProps {
  paymentEnabled?: boolean;
  turnstileSiteKey?: string | null;
}

export default function OrderForm({ paymentEnabled = false, turnstileSiteKey }: OrderFormProps) {
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const basePrice = 250;
  const totalPrice = basePrice * quantity;

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

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
    // Only require Turnstile if site key is provided
    if (turnstileSiteKey && !turnstileToken) {
      setErrorMessage('Please complete the security verification');
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
          formType: 'order',
          turnstileToken,
          quantity,
          totalPrice,
          shippingAddress: formData.address,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          notes: formData.notes,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to submit order');
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
      setTurnstileToken(null);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit order. Please try again or contact us directly.');
      console.error('Order submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Quantity Selector */}
      <div className="bg-parchment p-6 rounded-lg border border-living-green/20">
        <label className="block text-charcoal font-semibold mb-3">Quantity</label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
            className="w-12 h-12 bg-spring-meadow text-charcoal rounded-lg hover:bg-golden-wattle hover:text-deep-forest transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-spring-meadow disabled:hover:text-charcoal text-xl font-bold border border-new-growth"
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
            className="w-20 h-12 bg-spring-meadow text-charcoal text-center rounded-lg border border-new-growth focus:outline-none focus:border-golden-wattle focus:ring-2 focus:ring-golden-wattle/20 text-lg font-semibold"
            aria-label="Quantity"
          />
          <button
            type="button"
            onClick={() => handleQuantityChange(1)}
            disabled={quantity >= 99}
            className="w-12 h-12 bg-spring-meadow text-charcoal rounded-lg hover:bg-golden-wattle hover:text-deep-forest transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-spring-meadow disabled:hover:text-charcoal text-xl font-bold border border-new-growth"
            aria-label="Increase quantity"
          >
            +
          </button>
          <div className="ml-auto text-right">
            <div className="text-stone-grey text-sm">Total</div>
            <div className="text-golden-wattle text-2xl font-bold">${totalPrice} AUD</div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <label htmlFor="name" className="block text-charcoal font-semibold mb-2">
          Full Name <span className="text-golden-wattle">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-spring-meadow text-charcoal rounded-lg border border-new-growth focus:outline-none focus:border-golden-wattle focus:ring-2 focus:ring-golden-wattle/20 transition-colors"
          placeholder="John Smith"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-charcoal font-semibold mb-2">
          Email Address <span className="text-golden-wattle">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-spring-meadow text-charcoal rounded-lg border border-new-growth focus:outline-none focus:border-golden-wattle focus:ring-2 focus:ring-golden-wattle/20 transition-colors"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-charcoal font-semibold mb-2">
          Phone Number <span className="text-golden-wattle">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-spring-meadow text-charcoal rounded-lg border border-new-growth focus:outline-none focus:border-golden-wattle focus:ring-2 focus:ring-golden-wattle/20 transition-colors"
          placeholder="+61 4XX XXX XXX"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-charcoal font-semibold mb-2">
          Shipping Address <span className="text-golden-wattle">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-spring-meadow text-charcoal rounded-lg border border-new-growth focus:outline-none focus:border-golden-wattle focus:ring-2 focus:ring-golden-wattle/20 transition-colors resize-none"
          placeholder="123 Main Street&#10;Suburb, State, Postcode&#10;Country"
        />
      </div>

      <div>
        <label htmlFor="notes" className="block text-charcoal font-semibold mb-2">
          Order Notes <span className="text-stone-grey text-sm font-normal">(Optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 bg-spring-meadow text-charcoal rounded-lg border border-new-growth focus:outline-none focus:border-golden-wattle focus:ring-2 focus:ring-golden-wattle/20 transition-colors resize-none"
          placeholder="Any special requests or delivery instructions..."
        />
      </div>

      {/* Turnstile Spam Protection */}
      <Turnstile
        siteKey={turnstileSiteKey}
        onVerify={handleTurnstileVerify}
        onExpire={() => setTurnstileToken(null)}
      />

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-living-green/20 border border-living-green text-charcoal px-6 py-4 rounded-lg">
          <p className="font-semibold text-living-green">Order request submitted successfully!</p>
          <p className="text-sm mt-1">We'll contact you shortly to confirm your order and arrange payment.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-alert-rust/10 border border-alert-rust text-charcoal px-6 py-4 rounded-lg">
          <p className="font-semibold text-alert-rust">Error</p>
          <p className="text-sm mt-1">{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-golden-wattle text-deep-forest px-8 py-4 rounded-lg font-bold text-lg hover:bg-living-green hover:text-natural-cream transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : paymentEnabled ? 'Proceed to Payment' : 'Submit Order Request'}
      </button>

      <p className="text-stone-grey text-sm text-center">
        {paymentEnabled
          ? 'You will be redirected to secure payment after submitting this form.'
          : 'We\'ll contact you to confirm your order and arrange payment.'}
      </p>
    </form>
  );
}
