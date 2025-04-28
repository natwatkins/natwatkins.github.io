import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { navLogoText, navLinks } from '../data';
import MobileMenu from './MobileMenu';

export default function Navbar({ navLinks }) {
  const [isToggled, setIsToggled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const MenuLinkStyles = `text-md font-semibold text-slate-950 hover:text-orange-700 transition-all duration-[0.3s]`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className='fixed top-0 left-0 w-full bg-white z-50 shadow-sm'
      animate={{
        padding: isScrolled ? '0.25rem 0' : '1rem 0',
      }}
      transition={{ duration: 0.15 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className='flex justify-between items-center px-5 py-3 max-w-7xl mx-auto'>
        <a 
          href='/' 
          className='logo text-md font-bold'
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }
          }}
          aria-label="Home"
        >
          {navLogoText ? navLogoText : 'Aether.'}
        </a>
        <div className='links'>
          <ul className='hidden md:flex items-center gap-7'>
            {navLinks.map((link) => (
              <li 
                key={link.name} 
                className={MenuLinkStyles}
              >
                <a 
                  href={link.href}
                  {...(link.name === 'Resume' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <motion.button
          className={`flex flex-col md:hidden gap-[3.5px] cursor-pointer z-50 ${
            isToggled ? 'fixed top-6 right-5' : ''
          }`}
          onClick={() => setIsToggled((prev) => !prev)}
          aria-label={isToggled ? "Close menu" : "Open menu"}
          aria-expanded={isToggled}
        >
          <motion.span
            animate={{
              rotate: isToggled ? 45 : 0,
              translateY: isToggled ? 7 : 0,
              width: isToggled ? 30 : 30,
            }}
            className='w-[30px] h-[2px] bg-black'
          />
          <motion.span
            animate={{ opacity: isToggled ? 0 : 1, width: isToggled ? 0 : 25 }}
            className='w-[20px] h-[2px] bg-black'
          />
          <motion.span
            animate={{
              rotate: isToggled ? -45 : 0,
              translateY: isToggled ? -5 : 0,
              width: isToggled ? 30 : 15,
            }}
            className='w-[15px] h-[2px] bg-black'
          />
        </motion.button>
      </div>
      {isToggled && (
        <MobileMenu 
          navLinks={navLinks}
          isToggled={isToggled}
          setIsToggled={setIsToggled}
        />
      )}
    </motion.nav>
  );
}
