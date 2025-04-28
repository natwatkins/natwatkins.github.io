import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

export default function MobileMenu({ navLinks, isToggled, setIsToggled }) {
  const subMenuLinkStyles = `text-xl text-slate-700 hover:text-slate-950 transition-all duration-[0.3s]`;

  return (
    <motion.div 
      className='md:hidden fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center z-30 bg-white'
      role="navigation"
      aria-label="Mobile navigation"
    >
      <motion.ul
        className='flex md:hidden flex-col items-center gap-3'
        variants={container}
        initial='hidden'
        animate='show'
      >
        {navLinks.map((link) => (
          <motion.li variants={item} key={link.name}>
            <a
              href={link.href}
              className={subMenuLinkStyles}
              onClick={() => setIsToggled(false)}
            >
              {link.name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
} 