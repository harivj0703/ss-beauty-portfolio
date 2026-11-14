import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, User, MapPin, Sparkles, MessageSquare, Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { submitBookingForm } from '../services/bookingService';
import { SERVICES_DATA } from '../data/services';

export default function BookingForm({ selectedService = "" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventType: 'Wedding',
    preferredDate: '',
    location: 'Thiruvannamalai',
    service: 'Bridal Makeup',
    message: ''
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
    'Wedding',
    'Engagement',
    'Reception',
    'Birthday',
    'Party',
    'Other'
  ];

  const locationOptions = [
    'Thiruvannamalai',
    'Chengam',
    'Other'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Customer name is required';
    }

    const phoneClean = formData.phone.replace(/[^0-9+]/g, '');
    if (!phoneClean) {
      errs.phone = 'Mobile number is required';
    } else if (phoneClean.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select your preferred date';
    } else if (formData.preferredDate < todayStr) {
      errs.preferredDate = 'Date cannot be in the past';
    }

    if (!formData.service) {
      errs.service = 'Please select a required service';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await submitBookingForm(formData);
      setSubmitResult(res);
      if (res.success && res.method === 'api') {
        setFormData({
          fullName: '',
          phone: '',
          eventType: 'Wedding',
          preferredDate: '',
          location: 'Thiruvannamalai',
          service: 'Bridal Makeup',
          message: ''
        });
      }
    } catch (err) {
      setSubmitResult({
        success: false,
        error: 'An unexpected error occurred. Please contact us via WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-warmwhite rounded-[2.5rem] border-2 border-blush/70 shadow-bubbly p-6 sm:p-8 md:p-10 text-left">
      <div className="border-b border-blush pb-5 mb-6">
        <span className="text-[10px] uppercase font-sans font-bold tracking-[0.2em] text-rose-burgundy">
          ONLINE INQUIRY & RESERVATION
        </span>
        <h3 className="text-2xl sm:text-3xl font-display font-medium text-burgundy mt-1">
          Reserve Your Date
        </h3>
        <p className="text-xs sm:text-sm text-espresso/75 font-sans font-light mt-1">
          Fill in your event details below to check Silambarasi's availability for your special day.
        </p>
      </div>

      {/* Success Notification */}
      {submitResult && submitResult.success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <div className="font-sans font-bold text-sm text-emerald-900">
                Inquiry Prepared Successfully!
              </div>
              <p className="text-xs mt-1 text-emerald-800 leading-relaxed">
                {submitResult.message}
              </p>
              {submitResult.whatsappUrl && (
                <div className="mt-3">
                  <a
                    href={submitResult.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-sans font-semibold uppercase tracking-wider shadow-md hover:bg-emerald-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Open in WhatsApp & Confirm
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Error Notification */}
      {submitResult && !submitResult.success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-300 text-rose-900 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="text-xs">
            <div className="font-semibold">Unable to submit via online form</div>
            <div>{submitResult.error}</div>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Customer Name & Mobile Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase font-sans font-semibold text-burgundy tracking-wider mb-1.5">
              Customer Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-rose-dusty absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full pl-11 pr-4 py-3.5 rounded-full border font-sans text-sm bg-cream-pink/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-burgundy/40 transition-all ${
                  errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-blush'
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
              Mobile Number *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-rose-dusty absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 9751972900"
                className={`w-full pl-11 pr-4 py-3.5 rounded-full border font-sans text-sm bg-cream-pink/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-burgundy/40 transition-all ${
                  errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-blush'
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

        {/* Event Type & Preferred Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase font-sans font-semibold text-burgundy tracking-wider mb-1.5">
              Event Type *
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-full border border-blush font-sans text-sm bg-cream-pink/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-burgundy/40 transition-all"
            >
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase font-sans font-semibold text-burgundy tracking-wider mb-1.5">
              Preferred Date *
            </label>
            <div className="relative">
              <input
                type="date"
                name="preferredDate"
                min={todayStr}
                value={formData.preferredDate}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 rounded-full border font-sans text-sm bg-cream-pink/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-burgundy/40 transition-all ${
                  errors.preferredDate ? 'border-rose-400 bg-rose-50/30' : 'border-blush'
                }`}
              />
            </div>
            {errors.preferredDate && (
              <span className="text-[11px] text-rose-600 font-sans mt-1 ml-4 block">
                {errors.preferredDate}
              </span>
            )}
          </div>
        </div>

        {/* Required Service & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase font-sans font-semibold text-burgundy tracking-wider mb-1.5">
              Required Service *
            </label>
            <div className="relative">
              <Sparkles className="w-4 h-4 text-rose-dusty absolute left-4 top-1/2 -translate-y-1/2" />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3.5 rounded-full border border-blush font-sans text-sm bg-cream-pink/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-burgundy/40 transition-all"
              >
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.title}>
                    {srv.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase font-sans font-semibold text-burgundy tracking-wider mb-1.5">
              Preferred Location *
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-rose-dusty absolute left-4 top-1/2 -translate-y-1/2" />
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3.5 rounded-full border border-blush font-sans text-sm bg-cream-pink/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-burgundy/40 transition-all"
              >
                {locationOptions.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label className="block text-xs uppercase font-sans font-semibold text-burgundy tracking-wider mb-1.5">
            Additional Message (Optional)
          </label>
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-rose-dusty absolute left-4 top-4" />
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your event timing, venue details, or bridal party size..."
              className="w-full pl-11 pr-4 py-3.5 rounded-3xl border border-blush font-sans text-sm bg-cream-pink/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-burgundy/40 transition-all resize-none"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-full bg-burgundy hover:bg-burgundy-rose text-warmwhite font-sans text-xs uppercase tracking-widest font-semibold shadow-burgundy-glow hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-60"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Processing Reservation...
              </span>
            ) : (
              <>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Submit Appointment Inquiry
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
