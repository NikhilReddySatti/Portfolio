import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Landing from './components/Landing';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative flex">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden">
        <Navbar />
        <section id="landing"><Landing /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="tech"><TechStack /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
