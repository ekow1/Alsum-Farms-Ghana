import React ,{useEffect} from 'react'
import { TiSocialLinkedin, TiSocialFacebook, TiSocialInstagram, TiMail, TiPhone, TiLocation } from 'react-icons/ti';
import Image from '../image/farm.jpg'
import Form from './sections/Form';

import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out'
    });
  }, []);
  return (
    <div className='w-full min-h-screen flex flex-col    bg-white' >
        <div className="w-full h-80 flex flex-col items-center justify-center lg:mt-20 bg-cover bg-center bg-no-repeat " style={{backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%) , url(${Image})`}}>

         <h1 className="lg:text-6xl text-4xl font-bold mb-4  text-white">Get In Touch</h1>
         <p className=' text-white lg:text-2xl text-center'>- Cultivating Relationships, Growing Together. - </p>
        </div>
      <div className="w-full h-[70%] grid grid-cols-1 md:grid-cols-2   justify-center   gap-4 px-8 py-5 lg:py-5 lg:px-16">
        <div className=" flex flex-col items-center  justify-center lg:justify-start lg:mt-24">
        <div className=' w-full lg:w-[40%] flex flex-col justify-center items-start text-md gap-4 px-5  mt-10 ' > 
            <h1 className='border-b-2 border-black font-serif font-bold text-xl lg:text-5xl mb-4' data-aos='fade-in'>Lets Talk</h1>
            <h2 className='font-serif font-semibold flex gap-1 items-center text-lg'> <TiLocation size={20}/>    Visit Our Office</h2>
            <p>
              Hopeline Institute
              Madina Social Welfare, Accra
              72 Boundary Road
            </p>
         
        </div>
        <div className='w-full lg:w-[40%] flex flex-col justify-center items-start lg:text-xl gap-8 px-5 py-5  mt-10   ' data-aos='fade-up'>
          <a href="tel:+233302521588">
        <p className="items-center gap-2 flex">
            <TiPhone size={20} />
            
             +233 302-521-588 
        
          </p>
        </a>
          <a href="tel:+233243066320">
        <p className="items-center gap-2 flex">
            <TiPhone size={20} />
            
             +233 243-066-320 
        
          </p>
        </a>
          <p className='flex items-center gap-2'>
            <TiMail size={30} /> info@alsumfarmsghana.com
          </p>

          <ul className='flex items-center gap-5 '>
            <li>
              <TiSocialFacebook size={30} />
            </li>
            <li>
              <TiSocialInstagram size={30} />
            </li>
            <li>
              <TiSocialLinkedin size={30} />
            </li>
          </ul>
        </div>
        </div>
        <div className=" flex flex-col items-center justify-center lg:justify-start py-10" data-aos='fade-zoom-in'>
            <Form />

        </div>
        
      </div>
    </div>
  )
}

export default Contact