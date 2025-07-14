import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-64 bg-bg border-r border-accent p-6 space-y-4">
      <h2 className="text-2xl font-bold">Nikhil Reddy Satti</h2>
      <p className="text-sm break-all">nikhil.satti05@gmail.com</p>
      <nav className="flex gap-4 text-xl">
        <a href="https://linkedin.com/in/nikhilreddysatti" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/NikhilReddySatti" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </nav>
      <a className="text-xs underline" href="https://nikhilreddysatti.github.io/Data-Analyst-Portfolio" target="_blank" rel="noreferrer">
        Current Portfolio
      </a>
    </aside>
  );
}

export default Sidebar;
