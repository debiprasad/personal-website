'use server'

import { Resend } from 'resend'

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  const data: ContactFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  }

  // Validate the data
  if (!data.name || !data.email || !data.message) {
    return {
      error: 'All fields are required'
    }
  }

  if (!data.email.includes('@')) {
    return {
      error: 'Invalid email address'
    }
  }

  try {
    // Send email notification
    await resend.emails.send({
      from: 'Debiprasad.dev Contact Form <no-reply@debiprasad.dev>',
      to: process.env.NOTIFICATION_EMAIL as string,
      replyTo: data.email,
      subject: `New Contact Form Message from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br/>')}</p>
      `
    })
    
    return {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    return {
      error: 'Failed to send message. Please try again.'
    }
  }
}
