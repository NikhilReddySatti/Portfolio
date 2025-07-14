import React from 'react';

function ProjectCard({ title, url, img }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group relative rounded-lg overflow-hidden border border-accent hover:shadow-lg transition-shadow"
    >
      <img src={img} alt={title} className="w-full h-48 object-cover opacity-80 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-bg/60 flex items-end p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </a>
  );
}

export default ProjectCard;
