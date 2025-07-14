import React, { useState } from 'react';

const experiences = [
  {
    role: 'Data Analyst',
    company: 'Holiday World',
    period: 'Jul 2024 – Present',
    headline: 'Lifted organic traffic & ad revenue +35% with GA + AdTech',
    bullets: [
      'Boosted organic traffic & ad revenue 35% through GA + SEO.',
      'Doubled weekly sign‑ups via GTM tracking.',
      'Built Tableau ad‑sales dashboard.',
    ],
  },
  {
    role: 'BI Analyst',
    company: 'Exelon Corp.',
    period: 'Sep 2023 – May 2024',
    headline: 'Saved $800 K by real‑time supply‑chain dashboards',
    bullets: [
      'Saved $800 K via Python + Tableau SC dashboards.',
      'Analyzed high‑volume data to cut bottlenecks.',
      'Automated anomaly alerts, reducing QC time 25%.',
    ],
  },
  {
    role: 'Business Tech Analyst',
    company: 'Deloitte',
    period: 'Jul 2021 – Jul 2023',
    headline: 'Modernised legacy claims system to microservices, 1 M+ tx/day',
    bullets: [
      'Migrated COBOL → cloud microservices, 1 M+ daily claims.',
      'Engineered IBM ODM rules for 20 M+ policies.',
      'Cut query response 40% by refactoring SQL.',
    ],
  },
];

function Experience() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Experience</h2>
      <div className="relative">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-8 pl-8 border-l-2 border-accent relative">
            <div className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-accent"></div>
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="flex flex-col text-left w-full"
            >
              <span className="font-medium">
                {exp.company} · {exp.role}
              </span>
              <span className="text-sm text-text/70">{exp.period}</span>
              <span className="mt-1">{exp.headline}</span>
            </button>
            {open === idx && (
              <ul className="mt-3 list-disc ml-6 space-y-1 text-text/90">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
