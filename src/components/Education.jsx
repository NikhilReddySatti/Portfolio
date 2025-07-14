import React from 'react';

function Education() {
  const schools = [
    {
      degree: 'BTech in Electrical & Electronics Engineering',
      institution: 'VNIT Nagpur',
      year: '2021',
    },
    {
      degree: 'MS in Business Analytics (IT Concentration)',
      institution: 'University of Illinois Urbana‑Champaign',
      year: '2024',
    },
  ];
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Education</h2>
      <div className="space-y-8">
        {schools.map((s, idx) => (
          <div key={idx} className="border-l-4 border-accent pl-4">
            <h3 className="text-xl font-medium">{s.degree}</h3>
            <p className="text-text/80">{s.institution} · {s.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
