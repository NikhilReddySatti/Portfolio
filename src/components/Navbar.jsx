import React from 'react';

const sections = [
  { id: 'landing', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'tech', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-bg/80 backdrop-blur border-b border-accent">
      <nav className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 py-3">
        {sections.map(s => (
          <a
            key={s.id}
            href={'#' + s.id}
            className="text-text hover:text-accent transition-colors"
          >
            {s.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
