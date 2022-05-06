import React,{Component} from 'react' 
import Logo from './svgs/logotype.svg'
import { Link } from 'react-router-dom'
import Menu from './svgs/menu.svg'
import MenuOpen from './svgs/menu-open.svg'


class TopBar extends Component{
    constructor(props) {
        super(props)
        this.state= {
            page: this.props.page,
            menuIcon: Menu
        }
        this.checkPage = this.checkPage.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    checkPage = () => {
        const currentPage = this.props.page
        if( this.state.page === currentPage){
            return
        } else {
            this.setState({page: currentPage})
        }
    }

    handleClick(e) {
        e.preventDefault();
        console.log('clicked menu')
        if(this.state.menuIcon === Menu) {
            this.setState(() => ({
                menuIcon: MenuOpen
            }))
        } else {
            this.setState(() => ({
                menuIcon: Menu
            }))
        }
    }

    render() {
        return(
            <div className='fixed bg-red-00 bg-mywhite w-full top-0 shadow-sm'>
                <div className='container'>
                    <div className='topbar flex w-screen justify-between px-2 py-4'>
                        <Link to='/'>
                        <img src={Logo} alt='Logo'/>
                        </Link>
                        <div className='Menu-icon-mobile md:hidden'><img src={this.state.menuIcon} onClick={this.handleClick} alt='Menu icon'/></div>
                        <div className='Menu-desktop hidden md:flex gap-20 text-myblack font-light text-lg px-8'>
                        {this.state.page === 'home' ? <p className='bg-myblue rounded-full px-5'>.home</p> : <Link to='/' className='hover:bg-mygrey rounded-full px-5'>.home</Link>}                                    
                        {this.state.page === 'work' ? <p className='bg-myblue rounded-full px-5' to='/work'>.work</p> :  <Link to='/work' className='hover:bg-mygrey rounded-full px-5 '>.work</Link>}                                               
                        {this.state.page === 'contact' ? <p className='bg-myblue rounded-full px-5'>.contact</p> :  <Link to='/contact' className='hover:bg-mygrey rounded-full px-5'>.contact</Link>}
                                                                           
                        </div>
                    </div>
                    { this.state.menuIcon === MenuOpen ? <div className='Menu-mobile md:hidden flex flex-col gap-8 items-center bg-mygrey w-screen pt-12 pb-24 font-light text-lg text-myblack'>
                        {this.state.page === 'home' ? <p className='bg-myblue rounded-full px-5 my-3'>.home</p> : <Link to='/' className='my-3'>.home</Link>}
                        {this.state.page === 'work' ? <p className='bg-myblue rounded-full px-5 my-3' to='/work'>.work</p> :  <Link to='/work' className='my-3'>.work</Link>}
                        {this.state.page === 'contact' ? <p className='bg-myblue rounded-full px-5 my-3'>.contact</p> :  <Link to='/contact' className='my-3'>.contact</Link>}
                    </div> : <div/>}
                    
                </div>
            </div>
        )
    }
}

export default TopBar