import React, { useEffect, useRef, useState } from 'react'
import CharacterIMG from '../assets/Character.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowDown, Menu, X } from 'lucide-react'
import Particles from '../components/Particles'

const Homepage = ({ refs }) => {
  const [menu, setMenu] = useState(false)
  const tl1 = useRef()
  const homePage = useRef()

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  useGSAP(() => {
    tl1.current = gsap.timeline({ paused: true })

    tl1.current
      .fromTo(
        '#menu',
        { x: -36, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.4, ease: 'power3.out' }
      )
      .fromTo(
        '.Link',
        { y: -14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.28,
          ease: 'power2.out',
          stagger: 0.05,
        },
        '-=0.18'
      )
  }, { scope: homePage })

  const menuAnimation = () => setMenu((prev) => !prev)

  useEffect(() => {
    if (!tl1.current) return
    menu ? tl1.current.play() : tl1.current.reverse()
  }, [menu])

  useGSAP(() => {
    gsap.set('#temp-cont', { opacity: 1 })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-topbar > *', {
      opacity: 0,
      y: -14,
      duration: 0.4,
      stagger: 0.08,
    })
      .from('.hero-status', { opacity: 0, y: 12, duration: 0.35 }, '-=0.1')
      .from('.span1', { opacity: 0, x: -28, duration: 0.45, stagger: 0.1 }, '-=0.1')
      .from('.span2', { opacity: 0, x: 28, duration: 0.45, stagger: 0.1 }, '-=0.35')
      .from('.image', { opacity: 0, y: 36, scale: 0.96, duration: 0.55 }, '-=0.35')
      .from('.hero-ring', { opacity: 0, scale: 0.85, duration: 0.5 }, '-=0.4')
      .from('.hero-name-left', { opacity: 0, x: -18, duration: 0.35 }, '-=0.2')
      .from('.hero-name-right', { opacity: 0, x: 18, duration: 0.35 }, '-=0.3')
      .from('.hero-tagline', { opacity: 0, y: 10, duration: 0.3 }, '-=0.15')
      .from('.hero-cta', { opacity: 0, y: 14, duration: 0.35, stagger: 0.08 }, '-=0.1')
      .from('.hero-scroll', { opacity: 0, y: 10, duration: 0.3 }, '-=0.05')

    gsap.to('.image', {
      y: 10,
      duration: 3.2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      force3D: true,
    })

    gsap.to('.hero-glow', {
      scale: 1.1,
      opacity: 0.95,
      duration: 2.8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      force3D: true,
    })

    gsap.to('.hero-ring', {
      rotate: 360,
      duration: 28,
      ease: 'none',
      repeat: -1,
      force3D: true,
      transformOrigin: '50% 50%',
    })

    gsap.to('.hero-scroll-arrow', {
      y: 6,
      duration: 1.1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      force3D: true,
    })
  }, { scope: homePage })

  const navItems = [
    { label: 'Home', ref: refs.homeRef },
    { label: 'About', ref: refs.aboutRef },
    { label: 'Skills', ref: refs.skillsRef },
    { label: 'Projects', ref: refs.projectsRef },
    { label: 'Contact', ref: refs.contactRef },
  ]

  return (
    <div className="h-dvh max-h-dvh overflow-hidden" ref={homePage}>
      <div id="temp-cont" className="hero-shell">
        <div className="hidden lg:block">
          <Particles count={7} />
        </div>

        <header className="hero-topbar">
          <button
            className="menu hero-menu-btn"
            onClick={menuAnimation}
            aria-label="Toggle menu"
            type="button"
          >
            {menu ? <X size={22} /> : <Menu size={22} />}
          </button>

          <p className="hero-top-name">Prasuk Jain</p>

          <div className="hero-brand-mark" aria-hidden>
            PJ
          </div>
        </header>

        <div id="menu" className="menu-panel hero-menu">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="Link hero-menu-link"
              type="button"
              onClick={() => {
                menuAnimation()
                scrollTo(item.ref)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hero-fit hero-stage">
          <div className="hero-status">
            <span className="hero-status-dot" />
            Available for opportunities
          </div>

          <div className="hero-title-row heading1">
            <span className="span1 hero-word">PORT</span>

            <div className="hero-character">
              <div className="hero-glow" aria-hidden />
              <div className="hero-ring" aria-hidden />
              <img
                src={CharacterIMG}
                alt="Prasuk Jain"
                className="image hero-avatar"
                decoding="async"
              />
            </div>

            <span className="span2 hero-word">FOLIO</span>
          </div>

          <div className="hero-name">
            <span className="hero-name-part hero-name-left">PRASUK</span>
            <span className="hero-name-line" aria-hidden />
            <span className="hero-name-part hero-name-right">JAIN</span>
          </div>

          <p className="hero-tagline">Full Stack Web Developer</p>

          <div className="hero-actions">
            <button
              type="button"
              className="hero-cta hero-cta-primary"
              onClick={() => scrollTo(refs.projectsRef)}
            >
              View Projects
            </button>
            <button
              type="button"
              className="hero-cta hero-cta-ghost"
              onClick={() => scrollTo(refs.aboutRef)}
            >
              About Me
            </button>
          </div>
        </div>

        <button
          type="button"
          className="hero-scroll"
          onClick={() => scrollTo(refs.aboutRef)}
        >
          <span>Scroll</span>
          <ArrowDown size={16} className="hero-scroll-arrow" />
        </button>
      </div>
    </div>
  )
}

export default Homepage
