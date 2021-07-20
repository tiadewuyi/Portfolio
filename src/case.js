import React, { Component } from 'react' 
import Extlink from './svgs/external-link.svg'
import {gsap, ScrollTrigger} from 'gsap/all'


class Case extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: this.props.image,
            title: this.props.title,
            description: this.props.desc,
            link: this.props.link,
            type1: this.props.type1 
        }

        this.case = null;
    }

    componentDidMount(){
        if(this.state.type1 === true) {
            gsap.from(this.case, { y:100, opacity:0, duration:1,  scrollTrigger: {trigger:this.case, toggleActions:'play none play pause', start: 'top center' }})
        } else {
            gsap.from(this.case, { y:-100, opacity:0, duration:1,  scrollTrigger: {trigger:this.case, toggleActions:'play none play pause', start: 'top center' }})
        }
        
	}

    render() {
        gsap.registerPlugin(ScrollTrigger);
        return(
            <div ref={ div => this.case = div }>
            { this.state.type1 === true ? <div className='container  mx-auto max-w-7xl my-6 lg:mt-14'>
                <div className='content flex flex-wrap justify-center px-8 gap-8 md:mx-auto lg:gap-20'>
                    <div className='image min-w-min'>
                        <img src={this.state.image} alt='case mockup'/>
                    </div>
                    <div className='text bg-red-00 my-auto'>
                        <div>
                            <p className='text-5xl text-myblack font-semibold'>{this.state.title}</p>
                            <p className='text text-lg text-mysecondary max-w-md mt-6 leading-8 font-light'>{this.state.description}</p>
                            <div className='button flex flex-nowrap mt-5'>
                                <a className='text-myblue2 font-medium' href={this.state.link}>View case study</a>
                                <img src={Extlink} alt='external link icon'></img>
                            </div>
                        </div>
                    </div>
                </div>    
            </div> : 
            <div className='container bg-green-00 mx-auto max-w-7xl my-6 lg:mt-14'>
                <div className='content flex flex-wrap justify-center px-8 gap-8 md:mx-auto lg:gap-20'>
                    <div className='text order-last md:order-first bg-red-00 my-auto'>
                        <div>
                            <p className='text-5xl text-myblack font-semibold'>{this.state.title}</p>
                            <p className='text text-lg text-mysecondary max-w-md mt-6 leading-8 font-light'>{this.state.description}</p>
                            <div className='button flex flex-nowrap mt-5'>
                                
                                <a className='text-myblue2 font-medium' href={this.state.link}>View on behance</a>
                                <img src={Extlink} alt='external link icon'></img>
                            </div>
                        </div>
                    </div>
                    <div className='image min-w-min'>
                        <img src={this.state.image} alt='case mockup'/>
                    </div>
                </div>    
            </div>}
            </div>
        )
    }
}

export default Case