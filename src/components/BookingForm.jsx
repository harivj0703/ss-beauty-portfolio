import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Phone, User, MapPin, Sparkles, MessageSquare, Send, CheckCircle2, AlertCircle, MessageCircle, ExternalLink, RefreshCw } from 'lucide-react';
import DatePicker from './DatePicker';
import { prepareWhatsAppBooking } from '../services/bookingService';
import { SERVICES_DATA } from '../data/services';
import { BUSINESS_CONFIG } from '../config/business';

export default function BookingForm({ selectedService = "" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventType: 'Wedding',
    preferredDate: '',
    location: 'Thiruvannamalai',
    service: 'Bridal Makeup',
    additionalRequirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const todayStr = new Date().toISOString().split('T')[0];

  const eventTypes = [
    'Wedding (Muhurtham)',
    'Engagement',
    'Reception',
    'Pre-Wedding Rituals',
    'Birthday / Party',
    'Other Special Occasion'
  ];

  const locationOptions = [
    'Thiruvannamalai',
    'Chengam',
    'Other (Venue on Request)'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your name';
    }

    const phoneClean = formData.phone.replace(/[^0-9+]/g, '');
    if (!phoneClean) {
      errs.phone = 'Mobile number is required for WhatsApp booking';
    } else if (phoneClean.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select your preferred date';
    } else if (formData.preferredDate < todayStr) {
      errs.preferredDate = 'Event date cannot be in the past';
    }

    if (!formData.service) {
      errs.service = 'Please choose a makeup artistry service';
    }

    if (!formData.location) {
      errs.location = 'Please select your event location';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = prepareWhatsAppBooking(formData);
      setSubmitResult(res);

      // Attempt to automatically open WhatsApp in a new tab
      if (res.whatsappUrl) {
        const opened = window.open(res.whatsappUrl, '_blank', 'noopener,noreferrer');
        if (!opened) {
          // If popup is blocked by the browser, user can click the retry button in the status view
          console.log('Direct popup blocked or deferred; user can tap WhatsApp button');
        }
      }
    } catch (err) {
      setSubmitResult({
        success: false,
        error: 'Could not generate WhatsApp inquiry link. Please call or message +91 9751972900 directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitResult(null);
    setErrors({});
  };

  return (
    <div className="w-full bg-warmwhite rounded-[2.5rem] border-2 border-blush/70 shadow-bubbly p-6 sm:p-8 md:p-10 text-left">
      {/* Header */}
      <div className="border-b border-blush pb-5 mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
          <span className="text-[10px] uppercase font-sans font-bold tracking-[0.2em] text-rose-burgundy">
            WHATSAPP-FIRST RESERVATION
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-burgundy mt-1">
          Reserve Your Date with Silambarasi
        </h3>
        <p className="text-xs sm:text-sm text-espresso/75 font-sans font-light mt-1.5 leading-relaxed">
          Fill in your event details below to create your pre-filled inquiry and connect directly with Silambarasi on WhatsApp.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {/* Post-Submission WhatsApp Screen */}
        {submitResult && submitResult.success ? (
          <motion.div
            key="success-screen"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            {/* Main WhatsApp Success Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-emerald-50 via-warmwhite to-cream-pink/50 border-2 border-emerald-300 shadow-md">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-medium text-lg sm:text-xl text-emerald-950">
                    Inquiry Prepared for WhatsApp!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-900/90 font-sans mt-1.5 leading-relaxed">
                    Your booking request has been formatted and opened in WhatsApp. <strong className="font-semibold text-emerald-950">Please tap "Send" inside WhatsApp</strong> to deliver your message to Silambarasi.
                  </p>
                </div>
              </div>

              {/* Crucial Availability Notice as instructed */}
              <div className="mt-4 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs font-sans flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Important Notice: </span>
                  Sending this message does not mean your booking is confirmed. Confirmation is strictly subject to date, time, and slot availability. Silambarasi will reply on WhatsApp to confirm.
                </div>
              </div>

              {/* Primary Action Button: Open WhatsApp */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={submitResult.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-lg shadow-[#25D366]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp to Send Message</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-burgundy hover:bg-rose-burgundy text-warmwhite font-sans text-xs uppercase tracking-widest font-bold shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Fallback Box if WhatsApp did not open */}
            <div className="p-5 rounded-2xl bg-cream-pink/50 border border-blush text-xs text-espresso/80 font-sans space-y-2">
              <div className="font-bold text-burgundy flex items-center gap-2">
                <span>WhatsApp didn't open automatically?</span>
              </div>
              <p>
                You can retry clicking the green button above, or contact Silambarasi directly at:
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-warmwhite border border-rose-burgundy/40 text-burgundy font-semibold hover:bg-burgundy hover:text-warmwhite transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{BUSINESS_CONFIG.contact.phone}</span>
                </a>
                <a
                  href={BUSINESS_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/10 text-emerald-800 border border-[#25D366]/30 font-semibold hover:bg-[#25D366] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Link</span>
                </a>
              </div>
            </div>

            {/* Button to edit or submit another request */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs font-sans text-burgundy/70 hover:text-burgundy font-semibold underline underline-offset-4"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Edit Details / Prepare Another Inquiry</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* Main Interactive Reservation Form */
          <motion.form
            key="booking-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            {/* Error banner if submission failed */}
            {submitResult && !submitResult.success && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-300 text-rose-900 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Error: </strong>
                  {submitResult.error}
                </div>
              </div>
            )}

            {/* Customer Name & Mobile Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase font-sans font-semibold text-burgundy tracking-wider mb-1.5">
                  Customer Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-rose-dusty absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full pl-11 pr-4 py-3.5 rounded-full border font-sans text-sm bg-cream-pink/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-burgundy/40 transition-all ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/40' : 'border-blush'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <span className="text-[11px] text-rose-600 font-sans mt-1 ml-4 block">
                    {errors.fullName}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase font-sans font-semibold text-burgundy tracking-wider mb-1.5">
                  Mobile Number (WhatsApp) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-rose-dusty absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9751972900"
                    className={`w-full pl-11 pr-4 py-3.5 rounded-full border font-sans text-sm bg-cream-pink/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-burgundy/40 transition-all ${
                      errors.phone ? 'border-rose-400 bg-rose-50/40' : 'border-blush'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <span className="text-[11px] text-rose-600 font-sans mt-1 ml-4 block">
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            {/* Required Service & Event Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase font-sans font-semibold text-burgundy tracking-wider mb-1.5">
                  Makeup Service *
                </label>
                <div className="relative">
                  <Sparkles className="w-4 h-4 text-rose-dusty absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-full border border-blush font-sans text-sm bg-cream-pink/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-burgundy/40 transition-all cursor-pointer"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.service && (
                  <span className="text-[11px] text-rose-600 font-sans mt-1 ml-4 block">
                    {errors.service}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase font-sans font-semibold text-burgundy tracking-wider mb-1.5">
                  Event Type *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-full border border-blush font-sans text-sm bg-cream-pink/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-burgundy/40 transition-all cursor-pointer"
                >
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preferred Date & Event Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase font-sans font-semibold text-burgundy tracking-wider mb-1.5">
                  Preferred Event Date *
                </label>
                <DatePicker
                  value={formData.preferredDate}
                  onChange={(dateStr) => {
                    setFormData((prev) => ({ ...prev, preferredDate: dateStr }));
                    if (errors.preferredDate) {
                      setErrors((prev) => ({ ...prev, preferredDate: undefined }));
                    }
                  }}
                  minDate={todayStr}
                  error={errors.preferredDate}
                />
                {errors.preferredDate && (
                  <span className="text-[11px] text-rose-600 font-sans mt-1 ml-4 block">
                    {errors.preferredDate}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase font-sans font-semibold text-burgundy tracking-wider mb-1.5">
                  Event Location *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-rose-dusty absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-full border border-blush font-sans text-sm bg-cream-pink/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-burgundy/40 transition-all cursor-pointer"
                  >
                    {locationOptions.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.location && (
                  <span className="text-[11px] text-rose-600 font-sans mt-1 ml-4 block">
                    {errors.location}
                  </span>
                )}
              </div>
            </div>

            {/* Additional Requirements */}
            <div>
              <label className="block text-xs uppercase font-sans font-semibold text-burgundy tracking-wider mb-1.5">
                Additional Requirements (Optional)
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-rose-dusty absolute left-4 top-4 pointer-events-none" />
                <textarea
                  name="additionalRequirements"
                  rows="3"
                  value={formData.additionalRequirements}
                  onChange={handleChange}
                  placeholder="Specify muhurtham timing, hall/venue name, bridal party size, or specific styling preferences..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-3xl border border-blush font-sans text-sm bg-cream-pink/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-burgundy/40 transition-all resize-none"
                ></textarea>
              </div>
            </div>

            {/* Transparent Process Note */}
            <div className="p-3.5 rounded-2xl bg-cream-pink/40 border border-blush text-[11px] text-espresso/70 font-sans flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>
                Clicking the button below formats your inquiry and opens WhatsApp directly with Silambarasi. You will be able to review and press Send.
              </span>
            </div>

            {/* Submit Button with Official WhatsApp Green Styling */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2.5 group disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Preparing WhatsApp Message...
                  </span>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                    <span>Send Booking Enquiry via WhatsApp</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
