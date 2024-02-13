import React ,{useEffect} from 'react';
import Image from '../image/farm.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Gallery = () => {
  const imageUrls = [
    "/alsum-pics/alsum.jpg",
    "/alsum-pics/alsum-1.jpg",
    "/alsum-pics/alsum-2.jpg",
    "/alsum-pics/alsum-3.jpg",
    "/alsum-pics/alsum-4.jpg",
    "/alsum-pics/alsum-5.jpg",
    "/alsum-pics/alsum-6.jpg",
    "/alsum-pics/alsum-7.jpg",
    "/alsum-pics/alsum-8.jpg",
    "/alsum-pics/alsum-9.jpg",
    "/alsum-pics/alsum-10.jpg",
    "/alsum-pics/alsum-11.jpg",
    "/alsum-pics/alsum-12.jpg",
    
   
  ];


  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out'
    });
  }, []);


  return (
    <div className='w-full min-h-screen flex flex-col  bg-white' >
        <div className="w-full h-80 flex flex-col items-center justify-center lg:mt-20 bg-cover bg-center bg-no-repeat " style={{backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%) , url(${Image})`}}>

         <h1 className="text-6xl font-bold mb-4  text-white">Portfolio</h1>
         <p className=' text-white lg:text-2xl text-center'>- Capturing Growth: A Visual Journey through Alsum Farms' Agricultural Excellence. - </p>
        </div>
      <div className="w-full  h-[100%]  grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-20 lg:py-20 lg:px-16 ">
        
        {imageUrls.map((imageUrl, index) => (
          <div key={index} style={{ width: '100%', height: '100%' }}>
            <img className="rounded-lg w-full h-full object-cover" src={imageUrl} alt={`Image ${index + 1}`} data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
