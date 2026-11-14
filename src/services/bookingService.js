/**
 * SS BEAUTY PARLOUR - WhatsApp Booking Submission Service
 * 
 * WhatsApp-first reservation workflow.
 * IMPORTANT: No email booking or notifications. Uses strictly WhatsApp,
 * direct phone dialling, and Instagram.
 */

import { BUSINESS_CONFIG, generateWhatsAppBookingUrl } from '../config/business.js';

function formatDisplayDate(dateStr) {
  if (!dateStr) return '';
  try {
    const [y, m, d] = dateStr.split('-').map(Number);
    const dateObj = new Date(y, m - 1, d);
    return dateObj.toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
}

export function prepareWhatsAppBooking(formData) {
  const formattedDate = formatDisplayDate(formData.preferredDate) || formData.preferredDate;

  const whatsappUrl = generateWhatsAppBookingUrl({
    name: formData.fullName,
    phone: formData.phone,
    service: formData.service,
    eventType: formData.eventType,
    date: formattedDate,
    location: formData.location,
    additionalRequirements: formData.additionalRequirements || formData.message
  });

  return {
    success: true,
    whatsappUrl,
    businessPhone: BUSINESS_CONFIG.contact.phone,
    businessCallUrl: BUSINESS_CONFIG.contact.callUrl,
    businessWhatsAppUrl: BUSINESS_CONFIG.contact.whatsappUrl,
    message: "Your booking request details have been prepared for WhatsApp. Please tap 'Send' inside WhatsApp to deliver your inquiry to Silambarasi. Confirmation is subject to slot availability."
  };
}
