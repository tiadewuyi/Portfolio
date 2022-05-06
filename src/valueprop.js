import React, { Component } from 'react' 
import Button from './button'
import Gif from './images/Proto.gif'

class ValueProp extends Component {
    render() {
        return(
            <div>
                <div className='Margin mx-10 lg:mx-margin mt-20'>
                    <div className='container bg-mygrey max-w-7xl mx-auto rounded-xl overflow-hidden'>
                    <div className='content flex flex-wrap gap-10'>
                        <div className='Text bg-blue-30 flex-grow my-auto mx-auto px-5 lg:mx-4 py-8 iphone:px-10 xl:flex-grow-0 '>
                            <div className='flex flex-col items-center lg:items-start'>
                                <p className='text-2xl md:text-3xl text-myblack font-medium lg:max-w-sm xl:max-w-l leading-10 tracking-tight md:leading-40'>Do you have an idea for a digital product but you don’t know how to go from idea to reality? <span className='whitespace-nowrap'>I can help.</span></p>
                                <div className='button mt-6'>
                                    <Button text='Send me a message' type='ext' link='mailto:tiadewuyi@gmail.com'/>
                                </div>
                            </div>
                        </div>
                        <div className='Image bg-mypurple flex-grow flex  '>
                            <div className='bg-mypurple max-w-md mx-auto'><img src={Gif} alt='Mockup Gif'/></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ValueProp