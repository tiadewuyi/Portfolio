import React from 'react'
import { useRef, useEffect } from "react";
import Button from '../button'
import TopBar from '../topbar2'
import Case from '../case'
import Footer from '../footer'
import Memoji from '../svgs/memoji/work-emoji.gif' 
import SnowyMock from '../svgs/snowy-mock.gif'
import FitX from '../svgs/fit-mock.gif'
import Taskie from '../svgs/taskie-mock.gif'
import {gsap, ScrollTrigger} from 'gsap/all'

function Work(props) {
  gsap.registerPlugin(ScrollTrigger)

  const ref = useRef(null)

  useEffect(() => {
    const hero = ref.current
    gsap.from(hero,{y:300, opacity:0, delay: .5})
  })
  return(
    <div>
    <div ref={ref}>
      <div className='Hero mt-40 flex flex-col items-center mx-10'>
      <img className='h-24' src={Memoji} alt='hero memoji'/>
      <header className='flex flex-col gap-4 mt-5'>
        <p className='text-3xl text-myblack font-bold text-center'><span className='font-medium text-myblue'></span> Tofunmi Adewuyi</p>
        <p className='text-xl text-mysecondary text-center font-medium '>Product + UX designer & Web designer from Nigeria</p>
      </header>
      <p className='text-mysecondary max-w-2xl text-left mt-4 leading-8 font-light'>Currently contributing to the design efforts at <a href='https://www.bodadmin.com'><span className='font-bold underline'>Bodadmin</span></a> from Nigeria.
      Responsiblities include user interace design, user experience design, visual design, user research, prototyping. I have experience taking ownership of a product’s design, going all the way.</p>
      <div className='Button mt-8'>
      <Button text='Connect with me'/>
      </div>
      </div>
      <div className='cases'>
        <header className='text-3xl text-mysecondary text-center my-20 font medium'>selected projects</header>
        <Case image={SnowyMock} link='https://7ofunmi.medium.com/ux-case-study-snowy-an-ice-cream-app-9efaf537b92d' title='Snowy' type1={true} desc='Snowy allows users order ice-cream and then co-ordinate pickup so they don’t spend so much time in the shop, and so business can go on as usual, without the in-shop traffic.' />
          <Case image={FitX} link='https://www.behance.net/gallery/110673213/Fitness-Mobile-app' title='FitX' type1={false} desc='FitX is a fitness app that helps you track your workout progress and also curates workout exercises for you. You can now hop from exercise to exercise without worrying about if the exercises in-bewteen count, because they do.' />
          <Case image={Taskie} link='https://7ofunmi.medium.com/getting-chores-done-a89ede720a6b' title='Taskie' type1={true} desc='Taskie is an application that aids parents in teaching their kids the value of work, time and money. While it is not necessarily important that kids paid for helping out at home, it is a good way of letting them know that money is generally worked for, and when you provide value you get rewarded.'/>
      </div>
      </div>
      <div className='TopBar flex bg-red-300 w-screen justify-center'><TopBar page='work'/></div>
      <Footer/>
      </div>
  )
}

export default Work