import './index.css'
import NavBar from '../NavBar'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {useState, useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import Discover from '../Discover'
import Services from '../Services'

const Home=()=>{
    useEffect(()=>{
        const fetchData= async ()=>{
            const url='https://jsonplaceholder.typicode.com/todos/'
            const response= await fetch(url)
            const data= await response.json()
            console.log(data)
        }
        fetchData()
    }, [])

    const [num, setNum]= useState(1)

    const onMinus=()=>{
        if (num > 1){
            setNum(num - 1)
        }
    }
    const onPlus=()=>{
        setNum(num + 1)
    }
    
    const onButton=()=>{
        <Navigate to='/bookings'/>
    }
    return (
        <div>
            <NavBar/>
            <div id='home' className='bg-home-container'>
                <div className='home-cont'>
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
                </div>
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
                        <div className='opt-butons'>
                            <button type='button' onClick={onMinus} className='mi btn'>-</button>
                            <p className='num'>{num}</p>
                            <button type='button' onClick={onPlus} className='pls btn'>+</button>
                        </div>
                    </div>
                    <button type='button' onClick={onButton} className='button-book'>BOOK</button>
                </div>
            </div>
            <div id='discover'>
                <Discover />
            </div>
            <div id='services'>
                <Services />
            </div>
        </div>
    )
}

export default Home