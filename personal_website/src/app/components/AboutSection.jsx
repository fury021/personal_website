import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image 
                src="/images/desk.jpg"
                width={450}
                height={450}
            />
            <div>
                <h2>About Me</h2>
                <p>
                Currently pursuing a B.Sc. in Computer Science at the University of Manitoba, I'm deeply engaged in both theoretical learning and hands-on projects. Notable endeavors include developing a Snake AI using Pytorch with advanced reinforcement techniques, contributing to a multi-threaded API web server, and leading a team in creating a Formula 1 database. Proficient in Python, R, and Java, along with strong database management skills, I bring practical experience from roles such as Sales Associate, where I honed leadership and customer service abilities. Additionally, as a volunteer instructor, I've guided students in web development. With a commitment to innovation, I aim to drive impactful change in the tech realm.
                </p>
            </div>
        </div>
    </section>
  )
}

export default AboutSection