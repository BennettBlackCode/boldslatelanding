'use client';

import { useState } from 'react';
import Container from './Container';
import { Mail, Send } from 'lucide-react';

const inquiryTypes = [
  'Agency — interested in our products',
  'Investor',
  'Media / Press',
  'Partnership',
  'Other',
];

export default function CallToAction() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('https://formester.com/api/v1/form/07R7sd2R2/submit', {
        method: 'POST',
        body: formData,
      });
      setSubmitted(true);
    } catch {
      // Silently handle — Formester may redirect
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-[#010100]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full" />
      </div>

      <Container>
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm">
            <Mail size={16} className="text-white/80" />
            <span className="text-sm font-medium text-white/90 tracking-wide">Get In Touch</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-semibold !text-white leading-[1.1] tracking-tight mb-6">
            Let&apos;s Talk
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mb-10 leading-relaxed">
            Whether you&apos;re an agency, investor, or just curious — we&apos;d love to hear from you.
          </p>

          {submitted ? (
            <div className="w-full p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <p className="text-xl font-medium text-white mb-2">Thanks for reaching out.</p>
              <p className="text-white/60 font-light">We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full space-y-5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 font-light focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 font-light focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-white/60 mb-2">I am a...</label>
                <select
                  id="type"
                  name="type"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-light focus:outline-none focus:border-white/40 transition-colors appearance-none"
                >
                  <option value="" className="text-[#010100]">Select one</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type} className="text-[#010100]">{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 font-light focus:outline-none focus:border-white/40 transition-colors resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#010100] rounded-xl text-base font-medium hover:bg-white/90 transition-colors disabled:opacity-50"
              >
                {submitting ? 'Sending...' : 'Send Message'}
                {!submitting && <Send size={16} />}
              </button>
            </form>
          )}

        </div>
      </Container>
    </section>
  );
}
