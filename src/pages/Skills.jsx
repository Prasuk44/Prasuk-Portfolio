import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import ReactIMG from '../assets/react.png'
import JS from '../assets/js.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import vsCode from '../assets/vsCode.png'
import NPM from '../assets/NPM.png'
import Vercel from '../assets/Vercel.png'
import Vite from '../assets/Vite.png'
import Express from '../assets/Express.png'
import MongoDB from '../assets/MongoDB.png'
import Next from '../assets/Next.png'
import Node from '../assets/Node.png'
import TS from '../assets/TypeScript.png'
import OpenAI from '../assets/openai.svg'
import Prompt from '../assets/prompt.svg'
import AIBot from '../assets/ai-bot.svg'
import LLM from '../assets/llm.svg'
import Particles from '../components/Particles'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const skillPage = useRef()

  const groups = [
    {
      title: 'Languages',
      subtitle: 'Core building blocks',
      items: [
        { name: 'JavaScript', icon: JS, level: 'Strong' },
        { name: 'TypeScript', icon: TS, level: 'Growing' },
        { name: 'HTML5', icon: html, level: 'Strong' },
        { name: 'CSS3', icon: css, level: 'Strong' },
      ],
    },
    {
      title: 'Frontend',
      subtitle: 'Interfaces & UX',
      items: [
        { name: 'React', icon: ReactIMG, level: 'Strong' },
        { name: 'Next.js', icon: Next, level: 'Growing' },
        { name: 'Tailwind', icon: tailwind, level: 'Strong' },
        { name: 'Vite', icon: Vite, level: 'Strong' },
      ],
    },
    {
      title: 'Backend',
      subtitle: 'APIs & data',
      items: [
        { name: 'Node.js', icon: Node, level: 'Strong' },
        { name: 'Express', icon: Express, level: 'Strong' },
        { name: 'MongoDB', icon: MongoDB, level: 'Strong' },
      ],
    },
    {
      title: 'AI',
      subtitle: 'Models & automation',
      items: [
        { name: 'OpenAI API', icon: OpenAI, level: 'Strong' },
        { name: 'Prompt Engineering', icon: Prompt, level: 'Strong' },
        { name: 'AI Integration', icon: AIBot, level: 'Strong' },
        { name: 'LLM Apps', icon: LLM, level: 'Growing' },
      ],
    },
    {
      title: 'Tools',
      subtitle: 'Workflow & ship',
      items: [
        { name: 'Git', icon: git, level: 'Strong' },
        { name: 'GitHub', icon: github, level: 'Strong' },
        { name: 'VS Code', icon: vsCode, level: 'Daily' },
        { name: 'NPM', icon: NPM, level: 'Daily' },
        { name: 'Vercel', icon: Vercel, level: 'Deploy' },
      ],
    },
  ]

  useGSAP(() => {
    gsap.set(['.Skills', '.skill-panel', '.skill-chip', '.eyebrow', '.skills-sub'], {
      opacity: 1,
      x: 0,
      y: 0,
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillPage.current,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    })

    tl.from('.skills-head > *', {
      opacity: 0,
      y: 18,
      duration: 0.4,
      stagger: 0.08,
      immediateRender: false,
    }).from('.skill-panel', {
      opacity: 0,
      y: 36,
      scale: 0.96,
      duration: 0.5,
      stagger: 0.12,
      ease: 'power2.out',
      immediateRender: false,
    }).from(
      '.skill-chip',
      {
        opacity: 0,
        y: 14,
        scale: 0.94,
        duration: 0.32,
        stagger: 0.03,
        ease: 'power2.out',
        immediateRender: false,
      },
      '-=0.35'
    )
  }, { scope: skillPage })

  return (
    <div id="cont-skills" ref={skillPage} className="relative py-20 lg:py-24">
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <Particles count={5} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="skills-head text-center mb-12 lg:mb-14">
          <p className="eyebrow mb-3">Capabilities</p>
          <h1 className="heading1 Skills Big text-[#f3e6d0] lg:text-7xl text-6xl font-bold mb-4">
            Skills
          </h1>
          <p className="small mx-auto max-w-xl skills-sub">
            MERN stack with AI-powered features — frontend polish, backend structure, and tools to ship.
          </p>
        </div>

        <div className="skills-grid">
          {groups.map((group, index) => (
            <article key={group.title} className="skill-panel">
              <header className="skill-panel-head">
                <span className="skill-index">0{index + 1}</span>
                <div>
                  <h2 className="skill-title">{group.title}</h2>
                  <p className="skill-subtitle">{group.subtitle}</p>
                </div>
              </header>

              <div className="skill-chip-list">
                {group.items.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <span className="skill-chip-icon">
                      <img src={skill.icon} alt="" loading="lazy" decoding="async" />
                    </span>
                    <span className="skill-chip-meta">
                      <span className="skill-chip-name">{skill.name}</span>
                      <span className="skill-chip-level">{skill.level}</span>
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
