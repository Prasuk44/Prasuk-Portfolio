import React, { useRef } from 'react'
import Character from '../assets/AboutCharacter.png'
import CV from '../assets/cv.png'
import LinkedIn from '../assets/linkedin.png'
import Github from '../assets/github.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { Mail } from 'lucide-react'
import Particles from '../components/Particles'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutPage = useRef()
  const heading1Ref = useRef()
  const heading2Ref = useRef()
  const heading3Ref = useRef()
  const Para1Ref = useRef()
  const Para2Ref = useRef()
  const Para3Ref = useRef()
  const Para4Ref = useRef()

  useGSAP(() => {
    const splits = []
    ;[Para1Ref, Para2Ref, Para3Ref, Para4Ref].forEach((ref) => {
      if (ref.current) splits.push(new SplitType(ref.current, { types: 'words' }))
    })

    const [split1, split2, split3, split4] = splits

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutPage.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    gsap.set(
      [
        heading1Ref.current,
        heading2Ref.current,
        heading3Ref.current,
        '.btn',
        '.image2',
        split1?.words,
        split2?.words,
        split3?.words,
        split4?.words,
      ].filter(Boolean),
      { opacity: 1, x: 0, y: 0 }
    )

    if (document.querySelector('.image2')) {
      gsap.from('.image2', {
        opacity: 0,
        duration: 0.7,
        immediateRender: false,
        scrollTrigger: {
          trigger: aboutPage.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      gsap.to('.image2', {
        y: 8,
        duration: 3.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        force3D: true,
        scrollTrigger: {
          trigger: aboutPage.current,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play pause resume pause',
        },
      })
    }

    tl.from(heading1Ref.current, {
      x: 60,
      opacity: 0,
      duration: 0.55,
      ease: 'power3.out',
      immediateRender: false,
    })

    if (split1?.words?.length) {
      tl.from(split1.words, { opacity: 0, y: 10, stagger: 0.018, duration: 0.28, immediateRender: false })
    }
    if (split2?.words?.length) {
      tl.from(split2.words, { opacity: 0, y: 10, stagger: 0.018, duration: 0.28, immediateRender: false })
    }

    tl.from(heading2Ref.current, {
      x: 60,
      opacity: 0,
      duration: 0.4,
      ease: 'power3.out',
      immediateRender: false,
    })

    if (split3?.words?.length) {
      tl.from(split3.words, { opacity: 0, y: 10, stagger: 0.018, duration: 0.28, immediateRender: false })
    }

    tl.from(heading3Ref.current, {
      x: 60,
      opacity: 0,
      duration: 0.4,
      ease: 'power3.out',
      immediateRender: false,
    })

    if (split4?.words?.length) {
      tl.from(split4.words, { opacity: 0, y: 10, stagger: 0.018, duration: 0.28, immediateRender: false })
    }

    tl.from('.btn', {
      opacity: 0,
      y: 10,
      ease: 'power2.out',
      stagger: 0.08,
      duration: 0.3,
      immediateRender: false,
    })

    return () => {
      splits.forEach((s) => s?.revert?.())
    }
  }, { scope: aboutPage })

  return (
    <div id="cont-about" ref={aboutPage} className="min-h-screen h-auto overflow-x-hidden">
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <Particles count={6} />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-8 lg:gap-6 px-6 sm:px-10 lg:px-14 py-16 lg:py-12 min-h-screen">
        <div className="w-full">
          <p className="eyebrow mb-3">About</p>
          <h1 ref={heading1Ref} className="heading1 Big text-[#f3e6d0] lg:text-7xl text-6xl font-bold mb-5">
            WHO AM I
          </h1>

          <h2 className="Poppins" ref={Para1Ref}>
            Hi, I'm Prasuk Jain — Full Stack Web Developer.
          </h2>
          <p className="small mt-3 max-w-2xl" ref={Para2Ref}>
            I build scalable, user-friendly web apps with the MERN stack. I care about clean UI, solid backend
            structure, and shipping projects that feel fast and polished.
          </p>

          <h1 ref={heading2Ref} className="heading1 text-[#f3e6d0] lg:text-5xl text-4xl font-bold mt-9 mb-3">
            What I Do
          </h1>
          <p ref={Para3Ref} className="small max-w-2xl">
            From React frontends to Node.js APIs and MongoDB data models, I turn ideas into working products —
            with attention to responsive design, performance, and maintainable code.
          </p>

          <h1
            ref={heading3Ref}
            className="heading1 text-[#f3e6d0] lg:text-5xl text-4xl font-bold mt-9 mb-3"
          >
            Right Now
          </h1>
          <p ref={Para4Ref} className="small max-w-2xl">
            I'm deepening advanced React patterns and backend optimization, while building personal projects that
            show real product thinking — not just demos.
          </p>

          <div className="flex flex-wrap gap-3 pt-9">
            <a
              href="/Prasuk_Jain_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              download="Prasuk_Jain_Resume.pdf"
            >
              <button className="cursor-pointer btn btn-primary py-3 px-5 flex gap-2 items-center border rounded-2xl text-base lg:text-lg">
                Resume <img className="hidden lg:block h-7 w-fit" src={CV} alt="" />
              </button>
            </a>

            <a href="https://www.linkedin.com/in/prasuk-shah-64815124a" target="_blank" rel="noreferrer">
              <button className="cursor-pointer btn py-3 px-5 flex gap-2 items-center border rounded-2xl text-base lg:text-lg">
                LinkedIn <img className="hidden lg:block h-7 w-fit" src={LinkedIn} alt="" />
              </button>
            </a>

            <a href="https://github.com/Prasuk44" target="_blank" rel="noreferrer">
              <button className="cursor-pointer btn py-3 px-5 flex gap-2 items-center border rounded-2xl text-base lg:text-lg">
                GitHub <img className="hidden lg:block h-7 w-fit" src={Github} alt="" />
              </button>
            </a>

            <a href="mailto:jainprasuk23@gmail.com">
              <button className="cursor-pointer btn py-3 px-5 flex gap-2 items-center border rounded-2xl text-base lg:text-lg">
                Email Me <Mail size={20} strokeWidth={2} />
              </button>
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-end justify-center h-full">
          <img
            src={Character}
            alt="About illustration"
            className="image2 w-full max-w-md h-auto max-h-[78vh] object-contain will-change-transform"
            decoding="async"
          />
        </div>
      </div>
    </div>
  )
}

export default About
