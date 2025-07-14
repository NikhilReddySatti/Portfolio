import React from 'react';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'SQL', level: 88 },
  { name: 'Looker', level: 85 },
  { name: 'Tableau', level: 82 },
  { name: 'AWS', level: 86 },
  { name: 'Django', level: 84 },
  { name: 'PySpark', level: 80 },
  { name: 'CI/CD', level: 83 },
  { name: 'Snowflake', level: 81 },
  { name: 'LangChain', level: 80 },
];

function Skills() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>
      <div className="space-y-4">
        {skills.map((s, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm mb-1">
              <span>{s.name}</span>
              <span>{s.level}%</span>
            </div>
            <div className="w-full bg-text/20 h-2 rounded">
              <div
                className="h-2 rounded bg-accent"
                style={{ width: `${s.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
