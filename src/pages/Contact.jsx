import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Send } from 'lucide-react'
import LinkedIn from '../assets/linkedin.png'
import Github from '../assets/github.png'
import Particles from '../components/Particles'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const contactPage = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sentHint, setSentHint] = useState(false)

  useGSAP(() => {
    gsap.set(['.contact-title', '.contact-card', '.contact-form', '.contact-sub', '.contact-field', '.contact-footer'], {
      opacity: 1,
      y: 0,
      scale: 1,
    })

    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: {
        trigger: contactPage.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    tl.from('.contact-eyebrow', {
      opacity: 0,
      y: 12,
      duration: 0.35,
      immediateRender: false,
    })
      .from(
        '.contact-title',
        {
          opacity: 0,
          y: 24,
          duration: 0.45,
          immediateRender: false,
        },
        '-=0.1'
      )
      .from(
        '.contact-sub',
        {
          opacity: 0,
          y: 12,
          duration: 0.35,
          immediateRender: false,
        },
        '-=0.15'
      )
      .from(
        '.contact-card',
        {
          opacity: 0,
          y: 22,
          scale: 0.95,
          duration: 0.42,
          stagger: 0.1,
          ease: 'back.out(1.3)',
          immediateRender: false,
        },
        '-=0.1'
      )
      .from(
        '.contact-form',
        {
          opacity: 0,
          y: 28,
          duration: 0.5,
          immediateRender: false,
        },
        '-=0.2'
      )
      .from(
        '.contact-field',
        {
          opacity: 0,
          y: 12,
          duration: 0.3,
          stagger: 0.06,
          immediateRender: false,
        },
        '-=0.25'
      )
      .from(
        '.contact-footer',
        {
          opacity: 0,
          y: 16,
          duration: 0.4,
          immediateRender: false,
        },
        '-=0.1'
      )
  }, { scope: contactPage })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name || 'Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:jainprasuk23@gmail.com?subject=${subject}&body=${body}`
    setSentHint(true)
    setTimeout(() => setSentHint(false), 3500)
  }

  return (
    <section id="cont-contact" ref={contactPage} className="contact-section">
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <Particles count={5} />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="text-center mb-10 lg:mb-12">
          <p className="contact-eyebrow eyebrow mb-3">Get in touch</p>
          <h1 className="contact-title heading1 text-[#f3e6d0] text-6xl lg:text-7xl font-bold">
            Contact
          </h1>
          <p className="contact-sub small mx-auto max-w-xl mt-4">
            Open to internships, freelance, and full-time roles. Drop a message — I’ll get back soon.
          </p>
        </div>

        <div className="contact-grid">
          <a
            className="contact-card"
            href="mailto:jainprasuk23@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card-icon">
              <Mail size={22} />
            </span>
            <span className="contact-card-label">Email</span>
            <span className="contact-card-value">jainprasuk23@gmail.com</span>
          </a>

          <a
            className="contact-card"
            href="https://www.linkedin.com/in/prasuk-shah-64815124a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card-icon">
              <img src={LinkedIn} alt="" />
            </span>
            <span className="contact-card-label">LinkedIn</span>
            <span className="contact-card-value">prasuk-shah</span>
          </a>

          <a
            className="contact-card"
            href="https://github.com/Prasuk44"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card-icon">
              <img src={Github} alt="" />
            </span>
            <span className="contact-card-label">GitHub</span>
            <span className="contact-card-value">@Prasuk44</span>
          </a>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="contact-form-row">
            <label className="contact-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                required
              />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@email.com"
                required
              />
            </label>
          </div>

          <label className="contact-field">
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Tell me about the role or project..."
              rows={5}
              required
            />
          </label>

          <button type="submit" className="contact-submit">
            Send Message <Send size={18} />
          </button>

          {sentHint && (
            <p className="contact-hint">Opening your email app...</p>
          )}
        </form>

        <div className="contact-footer">
          <h2>
            Made with ❤ by{' '}
            <a
              href="https://www.linkedin.com/in/prasuk-shah-64815124a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prasuk Jain
            </a>
          </h2>
          <a
            href="https://github.com/Prasuk44"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={Github} alt="GitHub" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
