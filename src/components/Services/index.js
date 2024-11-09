import './index.css'
import { IoIosWifi } from "react-icons/io";
import { MdFastfood, MdHomeFilled, MdMap, MdFlag, MdOutlineShoppingCart} from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { IoBicycleSharp } from "react-icons/io5";


const Services=()=>{
    return (
        <div className="bg-home-container discover-cont">
            <h1>Services</h1>
            <div className='comments-con'>
                <div className='comment com'>
                    <IoIosWifi className='icon' />
                    <h1 className='heading'>High Speed Internet</h1>
                    <p className='para'>Optical fiber connections provided in not only in your cabins but rather to 
                        all of the BriSpere scenic working spaces and dining areas.</p>
                </div>
                <div className='comment com'>
                    <MdFastfood className='icon' />
                    <h1 className='heading'>Healthy meals</h1>
                    <p className='para'>A healthy breakfast and pleasent dinner will be seviced at your space every 
                        single day for your entire duration of stay with option of paid order within BriSphere.
                    </p>
                </div>
                <div className='comment com'>
                    <MdHomeFilled className='icon' />
                    <h1 className='heading'>Homely Stay</h1>
                    <p className='para'>Designed for working prefessionals with spacious interiors, comfortable beds 
                        and sleeky attached kitchen are some of the comforts provided in your space.
                    </p>
                </div>
                <div className='comment com'>
                    <FaCar className='icon' />
                    <h1 className='heading'>Transportation</h1>
                    <p className='para'>Optical fiber connections provided in not only in your cabins but rather to 
                        all of the BriSpere scenic working spaces and dining areas.</p>
                </div>
                <div className='comment com'>
                    <IoBicycleSharp className='icon' />
                    <h1 className='heading'>Food Delivery</h1>
                    <p className='para'>Optical fiber connections provided in not only in your cabins but rather to 
                        all of the BriSpere scenic working spaces and dining areas.</p>
                </div>
                <div className='comment com'>
                    <MdMap className='icon' />
                    <h1 className='heading'>Tourism</h1>
                    <p className='para'>Optical fiber connections provided in not only in your cabins but rather to 
                        all of the BriSpere scenic working spaces and dining areas.</p>
                </div>
                <div className='comment com'>
                    <MdFlag className='icon' />
                    <h1 className='heading'>Job</h1>
                    <p className='para'>Optical fiber connections provided in not only in your cabins but rather to 
                        all of the BriSpere scenic working spaces and dining areas.</p>
                </div>
                <div className='comment com'>
                    <FaCar className='icon' />
                    <h1 className='heading'>Rental Service</h1>
                    <p className='para'>Optical fiber connections provided in not only in your cabins but rather to 
                        all of the BriSpere scenic working spaces and dining areas.</p>
                </div>
                <div className='comment com'>
                    <MdOutlineShoppingCart className='icon' />
                    <h1 className='heading'>Online Shop</h1>
                    <p className='para'>Optical fiber connections provided in not only in your cabins but rather to 
                        all of the BriSpere scenic working spaces and dining areas.</p>
                </div>
            </div>
        </div>
    )
}

export default Services