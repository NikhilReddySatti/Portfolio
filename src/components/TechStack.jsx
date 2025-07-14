import React from 'react';

const words = [
  'CrewAI','LangChain','Firebase','IBM ODM','PCF','Snowflake',
  'A/B Testing','Figma','GA4','GTM','AdSense','Seaborn','JIRA'
];

function TechStack() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Tech Stack Cloud</h2>
      <div className="flex flex-wrap gap-4">
        {words.map((w, idx) => (
          <span
            key={idx}
            className="text-accent font-semibold animate-pulse"
            style={{ fontSize: `${14 + (idx % 5) * 6}px` }}
          >
            {w}
          </span>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
