import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3.out' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3.out' })

    const onMove = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    const onOver = (e) => {
      if (e.target.closest('a, button, .project-tile, .contact-card, .icon, .Link, input, textarea')) {
        cursor.classList.add('is-hover')
      }
    }
    const onOut = (e) => {
      if (e.target.closest('a, button, .project-tile, .contact-card, .icon, .Link, input, textarea')) {
        cursor.classList.remove('is-hover')
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <div className="site-atmosphere">
      <div className="site-content">
        <div
          ref={cursorRef}
          className="cursor z-[99.9] pointer-events-none h-5 w-5 fixed rounded-full md:block hidden"
        />
        <div ref={homeRef}>
          <Homepage refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactRef }} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
