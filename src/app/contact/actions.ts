"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormState {
  success: boolean;
  error: string | null;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const interestArea = formData.get("interestArea") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !interestArea || !message) {
    return { success: false, error: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: "Website Contact <noreply@grassecon.org>",
      to: process.env.CONTACT_EMAIL || "info@grassecon.org",
      replyTo: email,
      subject: `Contact Form [${interestArea}]: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nInterest Area: ${interestArea}\n\nMessage:\n${message}`,
    });

    return { success: true, error: null };
  } catch (err) {
    console.error("Failed to send email:", err);
    return {
      success: false,
      error:
        "Failed to send message. Please try again or email us directly at info@grassecon.org.",
    };
  }
}
