import React from 'react';
import profileImg from '../assets/profile.jpg';

function Landing() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 px-6 relative">
      {/* orbiting icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-64 h-64 animate-spin-slow opacity-10"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="10" r="3" fill="#58A6FF" />
          <circle cx="90" cy="50" r="3" fill="#58A6FF" />
          <circle cx="50" cy="90" r="3" fill="#58A6FF" />
          <circle cx="10" cy="50" r="3" fill="#58A6FF" />
        </svg>
      </div>

      <img
        src={profileImg}
        alt="Profile"
        className="w-48 h-48 rounded-full object-cover border-4 border-accent"
      />
      <div className="max-w-xl space-y-4 text-center lg:text-left">
        <h1 className="text-4xl font-bold">Nikhil Reddy Satti</h1>
        <p className="text-lg">
          Data analyst who turns messy data into crisp, actionable insights. 4 yrs wrangling SQL, Python &amp; Looker. Loves clean design and great coffee.
        </p>
      </div>
    </div>
  );
}

export default Landing;
