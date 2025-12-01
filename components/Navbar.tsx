'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PillNav from './PillNav';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('#home');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .filter(link => link.href.startsWith('#'))
        .map(link => link.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    // If it's a page link (starts with /), navigate to that page
    if (href.startsWith('/')) {
      router.push(href);
      return;
    }

    // Otherwise, scroll to the section
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <PillNav
      logoText="Sappy"
      items={navLinks}
      activeHref={activeSection}
      onNavClick={handleNavClick}
      ease="power3.out"
      baseColor="#ffffff"
      pillColor="#0a0a1a"
      hoveredPillTextColor="#0a0a1a"
      pillTextColor="#ffffff"
    />
  );
}
