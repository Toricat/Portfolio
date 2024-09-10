import { useState } from 'react';
// import { HomeIcon, UserIcon, SettingsIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`transition-width duration-300 flex flex-col ${isOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white z-50` }>
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 m-2">
        Toggle
      </button>
      <div className="flex flex-col items-center">
        <button onClick={() => scrollToSection('section1')} className="p-2 flex items-center space-x-2">
          {/* <HomeIcon className="h-6 w-6"/> */}
          {isOpen && <span>Home</span>}
        </button>
        <button onClick={() => scrollToSection('section2')} className="p-2 flex items-center space-x-2">
          {/* <UserIcon className="h-6 w-6"/> */}
          {isOpen && <span>Profile</span>}
        </button>
        <button onClick={() => scrollToSection('section3')} className="p-2 flex items-center space-x-2">
          {/* <SettingsIcon className="h-6 w-6"/> */}
          {isOpen && <span>Settings</span>}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
