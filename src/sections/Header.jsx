import React, { useState } from 'react';
import useInView from '../hooks/useInView';

function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [headerRef, headerVisible] = useInView(0.2);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 z-10 flex w-full items-center justify-between bg-white/10 px-10 py-2 backdrop-blur-lg max-[800px]:hidden ${
        headerVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className="text-2xl font-bold text-secondary">A.</h1>
      <nav className="flex items-center gap-1">
        {['home', 'skills', 'websites', 'apps', 'about', 'contact'].map((link, index) => (
          <a
            key={index}
            href={`#${link}`}
            className={`rounded-full px-3 py-1 align-middle transition-colors ${
              link === activeLink
                ? 'bg-secondary text-white'
                : 'text-gray hover:text-secondary'
            }`}
            onClick={() => setActiveLink(link)}
          >
            {link.toUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
