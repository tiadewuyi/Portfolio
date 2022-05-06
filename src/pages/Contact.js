import React from 'react'
import TopBar from '../topbar2'
import Footer from '../footer'
import Memoji from '../svgs/memoji/hello-emoji.gif' 
import Gmail from '../svgs/socials/gmail.svg'

function Contact(props) {
  return(
    <div>
      <div className='Hero mt-40 flex flex-col items-center mx-2'>
        <img className='h-24' src={Memoji} alt='hero memoji'/>
        <header className='flex mt-5'>
            <p className='text-3xl text-myblack font-bold text-center'>Say hello!</p>
         </header>
         <div className=' flex flex-col items-center'>
            <p className='text-mysecondary max-w-3xl text-left mt-4 leading-8 font-light mx-8'>Want to have a chat with me about product design, a project, movies, or life generally? </p>
            <div className='flex flex-wrap iphone:gap-4 items-center mt-2 mx-8'>
                <p className='text-mysecondary leading-8 font-light'>Shoot me an email </p>
                <a className='email flex items-center gap-2 justify-end' href='mailto:tiadewuyi@gmail.com'>
                    <img src={Gmail} alt='gmail logo'/>
                    <p className='underline'>tiadewuyi@gmail.com</p>
                </a>
            </div>
        </div>
      </div>
      <Footer/>
      <div className='TopBar flex bg-red-300 w-screen justify-center'><TopBar page='contact'/></div>

    </div>
  )
}

export default Contact