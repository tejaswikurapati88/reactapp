import './index.css'
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from 'react'

const NavBar=()=>{
    const [isHam, setHam]= useState(false)

    const onham=()=>{
        setHam(!isHam)
    }
    return (
        <div className='nav-bar'>
                <a href='#home'><h1 className='nav-logo'>Brisphere</h1></a>
                <GiHamburgerMenu onClick={onham} className='ham' />
                {isHam&& <ul className='ham-items'>
                    <a href='#discover'>
                        <li className='nav-li'>Discover</li>
                    </a>
                    <hr/>
                    <a href='#services'>
                        <li className='nav-li'>Services</li>
                    </a>
                    <hr/>
                    <a href='#about'>
                        <li className='nav-li'>About Us</li>
                    </a>
                    <hr/>
                    </ul>}
                <ul className='nav-ul'>
                    <a href='#discover'>
                        <li className='nav-li'>Discover</li>
                    </a>
                    <a href='#services'>
                        <li className='nav-li'>Services</li>
                    </a>
                    <a href='#about'>
                        <li className='nav-li'>About Us</li>
                    </a>
                </ul>
            </div>
    )
}
export default NavBar