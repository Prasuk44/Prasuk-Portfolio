import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Character from '../assets/ProjectsPNG.png'
import Ecommerce from '../assets/Projects/E-Commerce.png'
import Quiz from '../assets/Projects/Quiz_App.png'
import Chatbox from '../assets/Projects/AI_Chatbox.png'
import VCard from '../assets/Projects/VCard_Portfolio.png'
import AICodeReview from '../assets/Projects/AI_Code_Review.png'
import AIVOA from '../assets/Projects/AIVOA_Complaint.png'
import Particles from '../components/Particles'

gsap.registerPlugin(ScrollTrigger)

const projectList = [
  {
    title: 'React E-Commerce Website',
    href: 'https://e-commerce-website-ruddy-beta.vercel.app/',
    image: Ecommerce,
  },
  {
    title: 'AI-Chatbox',
    href: 'https://srujanrothe83.github.io/AI_Chatbox-Srujan_Rothe/',
    image: Chatbox,
  },
  {
    title: 'vCard Personal Portfolio',
    href: 'https://vcard-personal-portfolio-rose.vercel.app/',
    image: VCard,
  },
  {
    title: 'AI Code Review Assistant',
    href: 'https://ai-code-review-assistant-kappa-one.vercel.app/',
    image: AICodeReview,
  },
  {
    title: 'AIVOA Complaint System',
    href: 'https://aiova-complaint-system.vercel.app/',
    image: AIVOA,
  },
  {
    title: 'Quiz App',
    href: 'https://quiz-app-eosin-iota.vercel.app/',
    image: Quiz,
  },
]

const Projects = () => {
  const projectsPage = useRef()
  const heading = useRef()
  const character = useRef()
  const cont = useRef()

  useGSAP(() => {
    gsap.set([heading.current, cont.current, character.current, '.box'], {
      opacity: 1,
      visibility: 'visible',
    })

    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: {
        trigger: projectsPage.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    tl.from(heading.current, {
      opacity: 0,
      y: 24,
      duration: 0.45,
      immediateRender: false,
    })
      .from(
        character.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          immediateRender: false,
        },
        '-=0.2'
      )
      .from(
        cont.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          immediateRender: false,
        },
        '<'
      )
      .from(
        '.box',
        {
          opacity: 0,
          y: 22,
          scale: 0.92,
          duration: 0.4,
          stagger: 0.07,
          ease: 'back.out(1.4)',
          immediateRender: false,
        },
        '-=0.2'
      )

    if (character.current) {
      gsap.to(character.current, {
        y: 8,
        duration: 3.4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        force3D: true,
      })
    }
  }, { scope: projectsPage })

  return (
    <div id="cont-projects" className="h-auto w-full">
      <div className="projects-section" ref={projectsPage}>
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <Particles count={5} />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-14 lg:py-16">
          <div className="text-center mb-8 lg:mb-10">
            <p className="eyebrow mb-2">Selected work</p>
            <h1 ref={heading} className="heading1 text-[#f3e6d0] text-6xl lg:text-7xl font-bold">
              Projects
            </h1>
          </div>

          <div className="projects-layout">
            <div className="projects-character-wrap">
              <img
                ref={character}
                src={Character}
                className="projects-character"
                alt=""
                decoding="async"
              />
            </div>

            <div ref={cont} className="projects-panel my-scroll">
              {projectList.map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box project-tile"
                >
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                  <h2>{project.title}</h2>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
