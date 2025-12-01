'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // TODO: Replace console.log with Supabase integration
    console.log('Form submitted:', formData);
    
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Get in <span className="text-brand-gold">Touch</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Catering inquiries, feedback, or just want to say hi?
        </p>
      </header>

      <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-6 shadow-brand sm:p-8">
        {submitted && (
          <div className="mb-6 rounded-lg bg-green-500/10 border border-green-500/30 p-4 text-center text-sm text-green-600 dark:text-green-400">
            Message sent! We&apos;ll get back to you soon.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              placeholder="Catering inquiry, feedback..."
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>
        </form>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Or reach us directly:
          </p>
          <a 
            href="tel:+16466014021" 
            className="mt-2 inline-block text-lg font-semibold text-brand-orange hover:text-primary transition-colors"
          >
            (646) 601-4021
          </a>
        </div>
      </div>
    </section>
  );
}
