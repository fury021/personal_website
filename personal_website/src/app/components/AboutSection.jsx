"use client"
import React,{useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: "Skills",
    id : "skills",
    content : (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>SQL</li>
        <li>TailwindCSS</li>
        <li>HTML</li>
        <li>Python</li>
        <li>React</li>
      </ul>
    )
  },
  {
    title: "Education",
    id : "education",
    content : (
      <ul className='list-disc pl-2'>
        <li>Bachelor of Science Major Computer science (Co-op)</li>
        <li>University of Manitoba, Manitoba</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id : "certifications",
    content : (
      <ul className='list-disc pl-2'>
        <li>Something</li>
        <li>Something</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const[tab, setTab]=useState("skills")
  const[isPending, startTransition]=useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }


  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image 
                src="/images/desk.jpg"
                width={450}
                height={450}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text:lg'>
                Currently pursuing a B.Sc. in Computer Science at the University of Manitoba, 
                I'm deeply engaged in both theoretical learning and hands-on projects. 
                Notable endeavors include developing a Snake AI using Pytorch 
                with advanced reinforcement techniques, contributing to a multi-threaded API web server, 
                and leading a team in creating a Formula 1 database. Proficient in Python, R, and Java, 
                along with strong database management skills.
                </p>
                <div className='flex flex-row mt-8'>
                  <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab==="skills"}
                  > 
                    {" "}
                    Skills {" "}
                  </TabButton>
                  <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active={tab==="education"}
                  > 
                    {" "}
                    Education {" "} 
                  </TabButton>
                  <TabButton 
                    selectTab={() => handleTabChange("certifications")} 
                    active={tab==="certifications"}
                  > 
                    {" "}
                    Certifications {" "} 
                  </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id ===tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection