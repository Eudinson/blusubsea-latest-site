'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, User, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const contactSchema = z.object({
  full_name: z.string().min(2, 'Full name must be at least 2 characters').max(100, 'Full name is too long'),
  email: z.string().email('Please enter a valid email address'),
  contact: z.string().min(10, 'Contact number must be at least 10 digits').max(15, 'Contact number is too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500, 'Message is too long')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
      const userId = process.env.NEXT_PUBLIC_USER_ID!;

      await emailjs.send(
        serviceId,
        templateId,
        {
          full_name: data.full_name,
          email: data.email,
          contact: data.contact,
          message: data.message
        },
        userId
      );

      toast.success('Message sent successfully!', {
        description: 'We will get back to you within 24 hours.'
      });

      reset();
    } catch (error) {
      console.error('Email send error:', error);
      toast.error('Failed to send message');
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="full_name" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
          <User className="w-4 h-4 mr-2 text-blue-600" />
          Full Name
        </label>
        <input
          type="text"
          id="full_name"
          {...register('full_name')}
          disabled={isSubmitting}
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed ${errors.full_name ? 'border-red-500' : 'border-gray-300'
            }`}
          placeholder="John Doe"
        />
        {errors.full_name && (
          <p className="mt-1.5 text-sm text-red-600 flex items-center">
            <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
            {errors.full_name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
          <Mail className="w-4 h-4 mr-2 text-blue-600" />
          Email Address
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          disabled={isSubmitting}
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed ${errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1.5 text-sm text-red-600 flex items-center">
            <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
          <Phone className="w-4 h-4 mr-2 text-blue-600" />
          Contact Number
        </label>
        <input
          type="tel"
          id="contact"
          {...register('contact')}
          disabled={isSubmitting}
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed ${errors.contact ? 'border-red-500' : 'border-gray-300'
            }`}
          placeholder="+971 50 123 4567"
        />
        {errors.contact && (
          <p className="mt-1.5 text-sm text-red-600 flex items-center">
            <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
            {errors.contact.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
          <MessageSquare className="w-4 h-4 mr-2 text-blue-600" />
          Message
        </label>
        <textarea
          id="message"
          {...register('message')}
          disabled={isSubmitting}
          rows={5}
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
          placeholder="Tell us about your project requirements..."
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-600 flex items-center">
            <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
