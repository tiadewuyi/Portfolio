import React, { Component } from 'react' 
import Button from './button'
import Gif from './images/Proto.gif'

class ValueProp extends Component {
    render() {
        return(
            <div>
                <div className='bg-mygrey rounded-xl flex flex-wrap flex-col-reverse xl:flex-row w-2/3 justify-between overflow-hidden mx-auto'>
                    <div className='message flex flex-col gap-8 justify-center px-12 py-6'>
                        <div className='text max-w-md'>
                            <p className='text-myblack text-2xl font-medium leading-40 tracking-tight lg:text-3xl'>Do you have an idea for a digital product but you don’t know how to go from idea to reality? <span className='whitespace-nowrap'>I can help.</span></p>
                        </div>
                        <div className='button'>
                            <Button text='Send me a message'/>
                        </div>
                    </div>
                    <div className='image flex justify-center bg-mypurple'>
                        <img className='h-96' src={Gif} alt='gif'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ValueProp