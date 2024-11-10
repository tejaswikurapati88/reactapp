import './index.css'
import NavBar from '../NavBar'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {useState} from 'react'
import Discover from '../Discover'
import Services from '../Services'
import AboutUs from '../AboutUs';
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";

const Home=()=>{
    const [num, setNum]= useState(1)
    const [isbook, setbook]= useState(false)
    const [isorder, setOrder]=useState(false)

    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [number, setNumber]= useState('')
    const [adult, setadult]= useState('')
    const [child, setChild]= useState('')

    const onMinus=()=>{
        if (num > 1){
            setNum(num - 1)
        }
    }
    const onPlus=()=>{
        setNum(num + 1)
    }
    
    
    return (
        <div>
            <NavBar/>
            <div id='home' className='bg-home-container'>
                {isbook? 
                <div className='home-cont'>
                    {isorder ? <div className='order-cont'>
                        <div>
                            <h1 className='footer-h'>{name}</h1>
                            <p className='footer-pa'>+91 - {number}<br/> {email}<br/> {adult} Adults and {child} Children</p>
                        </div>
                            <div className='tick-cont'>
                                <img className='tick-img' 
                                src='https://res.cloudinary.com/dkvptcm7q/image/upload/v1731172340/ok-1976099_1280_nzhoee.png' 
                                alt='tick-image' />
                                <div>
                                    <h1 className='footer-h' >Order Complete</h1>
                                    <p className='foter-pa'>have questions?<br/><span className='contactus'>contact us</span></p>
                                </div>
                            </div>
                            
                        </div>
                    : 
                    <form className='form'>
                    <input className='inp' 
                    onChange={(e)=> setName(e.target.value)} 
                    value={name} type='text' 
                    placeholder='full name'/>

                    <input className='inp' 
                    onChange={(e)=> setEmail(e.target.value)} 
                    value={email} type='text' 
                    placeholder='email'/>

                    <input className='inp' 
                    onChange={(e)=> setNumber(e.target.value)} 
                    value={number} type='text' 
                    placeholder='mobile no'/>

                    <input className='inp-num' 
                    onChange={(e)=> setadult(e.target.value)} 
                    value={adult} type='number' 
                    placeholder='adults'/>

                    <input className='inp-num' 
                    onChange={(e)=> setChild(e.target.value)} 
                    value={child} type='number' 
                    placeholder='children'/>
                  </form>}
                </div>: <div className='home-cont'>
                    <div className='sub-home'>
                        <h1 className='main-heading'>Work from<br/> Ladakh</h1>
                        <p className='main-desc'>India's first true digital tourism ecosystem</p>
                        <div className='icons-home-sub-cont'>
                            <FaFacebook className='home-icons' />
                            <AiFillInstagram className='home-icons' />
                        </div>
                    </div>
                    <img src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1731144709/pexels-sagui-andrea-200115-618833_toi6mf.jpg" 
                    alt='img' className='home-img'/>
                </div>}
                
                <div className='container'>
                    <div className='container-sub'>
                        <p className='checkin'>CHECK-IN</p>
                        <select className='sele'>
                            <option className='option'>01 Frb 2022</option>
                        </select>
                    </div>
                    <div className='vl'></div>
                    <div className='container-sub'>
                        <p className='checkin'>CHECK-OUT</p>
                        <select className='sele'>
                            <option className='option'>07 Frb 2022</option>
                        </select>
                    </div>
                    <div className='vl'></div>
                    <div className='container-sub'>
                        <p className='checkin'>ROOMS</p>
                        {isorder? <p className='ord-p'>{num}</p>: 
                        <div className='opt-butons'>
                            <button type='button' onClick={onMinus} className='mi btn'>-</button>
                            <p className='num'>{num}</p>
                            <button type='button' onClick={onPlus} className='pls btn'>+</button>
                        </div> 
                        }
                        
                    </div>
                    {isbook? 
                        <>{isorder? <button type='button' className='button-book'>
                            <p className='pbuttn'><PiCurrencyInrBold />12,430</p>
                            </button>: 
                            <div>
                        <div type='button' onClick={()=>{setOrder(true)}} className='bcont'>
                            
                            <p className='pbuttn'><PiCurrencyInrBold />12,430</p>
                            <button type='button' className='arrow'><FaArrowRight /></button>
                            
                        </div>
                        <p className='but-p'>Click to pay token amount</p>
                        </div>
                        }
                        
                        </>
                        : 
                        <button type='button' onClick={()=>{setbook(true)}} className='button-book'>BOOK</button>
                    }
                    
                </div>
            </div>
            <div id='discover'>
                <Discover />
            </div>
            <div id='services'>
                <Services />
            </div>
            <div id='about'>
                <AboutUs />
            </div>
        </div>
    )
}

export default Home