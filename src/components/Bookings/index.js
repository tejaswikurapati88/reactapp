import AboutUs from '../AboutUs'
import NavBar from '../NavBar'
import './index.css'
import {useState} from 'react'

const Bookings=()=>{
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [number, setNumber]= useState('')
    const [adult, setadult]= useState('')
    const [child, setChild]= useState('')

    return (
        <div>
            <NavBar />
        <div className='bg-home-container'>
            <div className='home-cont book'>
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
                  </form>
                  
            </div>
            </div>
            <AboutUs />
        
        </div>
    )
}

export default Bookings