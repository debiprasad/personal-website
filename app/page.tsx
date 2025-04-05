"use client"

import { useRef, useState } from 'react'
import Link from 'next/link'
import { submitContactForm } from './actions'
import SocialButton from './components/SocialButton'
import { socials } from './data/socials'

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string | undefined;
  }>({ type: null, message: '' })

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData)
    
    if ('error' in result) {
      setFormStatus({ type: 'error', message: result.error })
    } else {
      setFormStatus({ type: 'success', message: result.message })
      formRef.current?.reset()
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Debiprasad Sahoo</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate fullstack developer crafting elegant solutions
          </p>
          <div className="flex justify-center gap-4 mb-6">
            {socials.map((social) => (
              <SocialButton key={social.name} social={social} />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </Link>
            <Link 
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Have a question or want to work together?
            </p>
          </div>

          <form ref={formRef} action={handleSubmit} className="mt-8 space-y-6">
            {formStatus.type && (
              <div className={`p-4 rounded-lg ${
                formStatus.type === 'success' 
                  ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300' 
                  : 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300'
              }`}>
                {formStatus.message}
              </div>
            )}

            <div className="space-y-4 rounded-md">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="relative block w-full rounded-lg border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full rounded-lg border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="relative block w-full rounded-lg border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
