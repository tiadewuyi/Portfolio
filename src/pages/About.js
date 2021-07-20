import React from 'react'
import Button from '../button'
import TopBar from '../topbar2'
import Footer from '../footer'
import Memoji from '../svgs/memoji/home-emoji.svg' 
import SnowyMock from '../svgs/snowy-mock.svg'
import FitMock from '../svgs/fit-mock.svg'

function About(props) {
  return(
    <div>
      <div className='TopBar flex bg-red-300 w-screen justify-center'><TopBar page='about'/></div>
      <div className='Hero mt-40 flex flex-col items-center'>
        <img className='h-24' src={Memoji} alt='hero memoji'/>
        <header className='flex mt-5'>
            <p className='text-3xl text-myblack font-bold text-center mx-4'>Product + UX designer & Web designer from Nigeria.</p>
         </header>
         <div className=''>
            <p className='text-mysecondary max-w-3xl text-left mt-4 leading-8 font-light mx-10'>My name is Tofunmi Adewuyi, a product designer and front-end developer based in Nigeria. I enjoy creating beautiful and functional user experiences. I am passionate about learning about and solving complex experiences and finding creative solutions to business problems, and also problem solving in general 😉.</p>
        </div>
      </div>
      <div className='value-add pt-16'>
            <div className='value1 container bg-green-00 mx-auto max-w-7xl my-6 lg:mt-14'>
                <div className='content flex flex-wrap justify-center px-8 gap-1 md:mx-auto lg:flex-row lg:gap-20'>
                    <div className='image min-w-min'>
                        <img src={SnowyMock} alt='case mockup'/>
                    </div>
                    <div className='my-auto'>
                        <div>
                             <p className='text-3xl text-myblack font-semibold max-w-md mt-6 leading-10'>A designer with a passion for user-centered design, problem solving and a strong growth mindset.</p>
                        </div>
                    </div>
                </div>    
            </div>

            <div className='value2 container bg-green-00 mx-auto max-w-7xl my-6 mt-20'>
                <div className='content flex flex-col-reverse items-center lg:flex-row flex-wrap justify-center px-8 gap-1 md:mx-auto lg:gap-20'>
                    <div className='my-auto'>
                        <div>
                             <p className='text-3xl text-myblack font-semibold max-w-md mt-6 leading-10'>A developer with great attention to detail, building useful and enjoyable web experiences.</p>
                        </div>
                    </div>
                    <div className='image min-w-min'>
                        <img src={FitMock} alt='case mockup'/>
                    </div>
                </div>    
            </div>
      </div>
      <div className='w-screen flex justify-center pt-24'>
        <div className='Button'>
            <Button text='Connect with me'/>
         </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default About