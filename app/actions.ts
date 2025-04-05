'use server'

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

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
    // Here we'll add email sending logic later
    // For now, just log it
    console.log('Form submitted:', data)
    
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
