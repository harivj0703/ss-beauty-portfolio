/**
 * SS BEAUTY PARLOUR - Booking Submission Service
 * 
 * Separates backend/form provider integration logic from UI components.
 * Supports configurable endpoints (Formspree, Web3Forms, Serverless Functions),
 * with automatic elegant WhatsApp fallback when no external endpoint is configured.
 */

import { BUSINESS_CONFIG, generateWhatsAppBookingUrl } from '../config/business';

export async function submitBookingForm(formData) {
  const endpoint = BUSINESS_CONFIG.contact.bookingApiEndpoint;

  // If a serverless endpoint or form service is configured, dispatch the request
  if (endpoint && endpoint.trim() !== '') {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      return {
        success: true,
        method: 'api',
        message: 'Your booking inquiry has been successfully sent. Silambarasi will contact you shortly!'
      };
    } catch (err) {
      console.error('API submission error:', err);
      return {
        success: false,
        method: 'api',
        error: err.message || 'Failed to submit form to server.'
      };
    }
  }

  // When no backend is configured, generate prefilled WhatsApp link
  // and return transparent status without faking a saved database record
  const whatsappUrl = generateWhatsAppBookingUrl({
    name: formData.fullName,
    phone: formData.phone,
    service: formData.service,
    eventType: formData.eventType,
    date: formData.preferredDate,
    location: formData.location,
    message: formData.message
  });

  return {
    success: true,
    method: 'whatsapp',
    whatsappUrl,
    message:
      'Booking details ready! Click below to send directly to Silambarasi via WhatsApp for immediate confirmation.'
  };
}
