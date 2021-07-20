import React, { Component } from 'react' 
import Twitter from './svgs/socials/twitter.svg'
import Behance from './svgs/socials/behance.svg'
import Linkedin from './svgs/socials/linkedin.svg'
import Medium from './svgs/socials/medium.svg'
import Gmail from './svgs/socials/gmail.svg'

class Footer extends Component {
    render() {
        return(
            <div>
                <div className='Footer absolute z-0 mt-40 bg-mygrey w-full mx-auto text-myblack px-8 md:px-20 rounded-t-xl'>
                    <div className='flex flex-wrap justify-between pt-10 pb-16 gap-10'>
                        <div className='Gotta bg-green-0'>
                            <div className='flex flex-wrap items-center gap-4'>
                                <p className='text-3xl text-myblue2 font-medium'>Got an interesting project or idea?</p>
                                <p className='text-mysecondary text-3xl'>I can help.</p>
                            </div>
                            <div className='socials mt-4'>
                                <p className='text-lg text-mysecondary'>socials</p>
                                <div className='socials-links flex flex-wrap max-w-3xl mt-3 gap-12 '>
                                    <a className='twitter flex items-center gap-2' href='https://twitter.com/7ofunm1'>
                                        <img src={Twitter} alt='twitter logo'/>
                                        <p className='underline text-blue-400'>@7ofunm1</p>
                                    </a>
                                    <a className='behance flex items-center gap-2' href='https://www.behance.net/oluwatoadewuyi'>
                                        <img src={Behance} alt='behance logo'/>
                                        <p className='underline'>@Tofunmi Adewuyi</p>
                                    </a>
                                    <a className='linkedin flex items-center gap-2' href='https://www.linkedin.com/in/tofunmi-adewuyi-173a8012a/'>
                                        <img src={Linkedin} alt='linkedin logo'/>
                                        <p className='underline text-myblue2 mt-1'>@Tofunmi Adewuyi</p>
                                    </a>
                                    <a className='medium flex items-center gap-2' href='https://medium.com/@7ofunmi'>
                                        <img src={Medium} alt='medium logo'/>
                                        <p className='underline'>@7ofunmi</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='connect bg-blue-0'>
                        <div className='right-0 flex flex-col  gap-4 '>
                            <p className='text-3xl text-mysecondary font-medium'>Connect with me</p>
                            <div className=' flex flex-col items-start lg:items-end'>
                                <p className='text-lg text-mysecondary'>say hello</p>
                                <a className='email flex mt-3 items-center gap-2 justify-end' href='mailto:tiadewuyi@gmail.com'>
                                    <img src={Gmail} alt='gmail logo'/>
                                    <p className='underline'>tiadewuyi@gmail.com</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer