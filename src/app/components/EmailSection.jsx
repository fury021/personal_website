"use client"
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"
import Link from "next/link"
import Image from 'next/image'

const EmailSection = () => {
    const [result, setResult] = React.useState("Send Message");
    const apiKey = process.env.NEXT_PUBLIC_REACT_APP_API_KEY;

    const handleSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key", apiKey);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };


  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I'm currently looking for new opportunities, my inbox is always open. 
                Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://www.github.com/fury021">
                    <Image src={GithubIcon} alt="Github Icon"/>
                </Link>
                <Link href="https://www.linkedin.com/in/mann-patel07">
                    <Image src={LinkedinIcon} alt="Github Icon"/>
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your email</label>
                    <input 
                        name="email"
                        type="email" 
                        id="email" 
                        required
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='youremail@domain.com'
                    />
                </div>
                <div className='mb-6'>
                    <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                    <input 
                        name="subject"
                        type="text" 
                        id="subject" 
                        required
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Just saying hi'
                    />
                </div>
                <div className='mb-6'>
                    <label
                        htmlFor='message'
                        className='text-white block text-sm mb-2 font-medium'
                    >
                        Message
                    </label>
                    <textarea
                        name='message'
                        id='message'
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Let's talk about..."
                    />                        
                </div>
                <button
                    type='submit'
                    className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        {result}
                    </button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection