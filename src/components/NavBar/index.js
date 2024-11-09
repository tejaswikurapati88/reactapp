import './index.css'
const NavBar=()=>{
    return (
        <div className='nav-bar'>
                <a href='#home'><h1 className='nav-logo'>Brisphere</h1></a>
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