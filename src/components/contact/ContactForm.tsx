"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/contact/actions";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    error: null,
  });

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <svg
          className="w-12 h-12 text-green-600 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Message sent!
        </h3>
        <p className="text-slate-600">
          Thank you for reaching out. We will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600">
          {state.error}
        </div>
      )}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all resize-none"
          placeholder="Tell us about your interest..."
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-green-600 text-white font-medium py-3 px-6 rounded-full hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
