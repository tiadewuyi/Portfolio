import React,{Component} from 'react'
import { Link } from 'react-router-dom'

class Button extends Component{
    constructor(props) {
        super(props)
        this.state = {
            link: this.props.link,
            type: this.props.type
        }
    }
    render() {
        return(
            <div>
            { this.state.type === 'ext' ?
            <a href={this.state.link} >
            <div className='bg-myblue2 py-4 px-9 rounded-full text-mywhite max-w-max'>
            <p className='whitespace-nowrap'>{this.props.text}</p>
            </div>
            </a> :
            <Link to={this.state.link} >
            <div className='bg-myblue2 py-4 px-9 rounded-full text-mywhite max-w-max'>
            <p className='whitespace-nowrap'>{this.props.text}</p>
            </div>
            </Link>}
            </div>
        )
    }
    
}

export default Button