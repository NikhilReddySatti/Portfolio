import React from 'react';
import ProjectCard from './ProjectCard';
import proj1 from '../assets/project1.png';
import proj2 from '../assets/project2.png';
import proj3 from '../assets/project3.png';

const projects = [
  {
    title: 'Modular Data Pipeline Generator',
    url: 'https://github.com/nikhilsatti/preprocessing_service',
    img: proj1,
  },
  {
    title: 'Customer Segmentation & Insights',
    url: 'https://github.com/NikhilReddySatti/Customer-Segmentation-for-Targeted-Marketing-Insights',
    img: proj2,
  },
  {
    title: 'Property Valuation Models',
    url: 'https://github.com/NikhilReddySatti/Statistical-Modeling-for-Property-Valuation',
    img: proj3,
  },
];

function Projects() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
