import { motion } from 'framer-motion';

export default function DropdownMenu({ link, activeDropdown, setActiveDropdown }) {
  const MenuLinkStyles = `text-md font-semibold text-slate-950 hover:text-orange-700 transition-all duration-[0.3s]`;

  return (
    <div className="relative">
      <button 
        className="flex items-center"
        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
        aria-expanded={activeDropdown === link.name}
        aria-controls={`${link.name}-dropdown`}
      >
        {link.name}
        <motion.svg 
          className="ml-1 w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      {activeDropdown === link.name && (
        <motion.div 
          id={`${link.name}-dropdown`}
          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
          onMouseLeave={() => setActiveDropdown(null)}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          role="menu"
        >
          {link.dropdown.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
} 