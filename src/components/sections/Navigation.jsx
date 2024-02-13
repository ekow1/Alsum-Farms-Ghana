import React, { useState, useEffect } from 'react';
import { TiSocialLinkedin, TiSocialFacebook, TiSocialInstagram, TiMail, TiPhone } from 'react-icons/ti';
import { TopNav } from '../../constants/nav';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // You can adjust the threshold value based on when you want the sticky effect to start.
      const threshold = 100;

      setIsSticky(offset > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full hidden  h-[95px] lg:flex lg:fixed items-center bg-white justify-center lg:text-md md:text-md z-10 ${
        isSticky ? 'bg-white text-black shadow-xl' : ''
      }`}
    >
      <div className="md:w-[70%] lg:w-[85%] flex items-center justify-between h-[70%] text-lg  cursor-pointer rounded-2xl ">
        <nav className="w-[50%] flex items-center justify-around ">
          <p>Logo</p>

          <ul className="flex items-center gap-16 font-mono ">
            {TopNav.map((nav) => (
              <NavLink to={nav.link} key={nav.name} className={({ isActive, isPending, isTransitioning }) => `
        ${isActive ? 'font-bold border-b-2 border-green-700 text-green-600' : ''}
        ${isPending ? 'text-red-500' : 'text-black'}
        ${isTransitioning ? 'transform translate-x-4 opacity-0 duration-100' : 'transition-slide'}
      `}>
                <li>{nav.name}</li>
              </NavLink>
            ))}
          </ul>
        </nav>

        <div className="w-60% lg:w-90% flex items-center gap-10  font-mono  ">
        <a href="tel:+233302521588">
        <p className="items-center gap-2 flex">
            <TiPhone size={20} />
            
             +233 302-521-588 
        
          </p>
        </a>
              <a href="mailto:info@alsumfarmsghana.com">
          <p className="flex items-center gap-2">

        
              <TiMail size={20} /> 
              info@alsumfarmsghana.com
            
          </p>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Navigation;
