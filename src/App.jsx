import React from 'react';
import bgImage from './assets/bg.png';
import MagicBento from './MagicBento';

function App() {
  const TeamData = [
    {
      title: "Festhead",
      link: "https://www.google.com/",
    },
    {
      title: "Sponsorship",
      link: "https://www.google.com/",
    },
    {
      title: "Creative",
      link: "https://www.google.com/",
    },
    {
      title: "Content",
      link: "https://www.google.com/",
    },
    {
      title: "Tech",
      link: "https://www.google.com/",
    },
    {
      title: "Media",
      link: "https://www.google.com/",
    },
  ];

  // App.js
  return (
    <div
      className='bg-cover bg-center bg-no-repeat min-h-screen w-full flex items-center justify-center'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Centered content wrapper */}
      <div className="flex flex-col items-center">

        <h1 className='text-6xl font-bold mb-5 text-white' style={{ fontFamily: 'Nebula, sans-serif', marginBottom: '2rem' }}>
          OUR TEAMS
        </h1>

        <div className='w-full flex justify-center'>
          <MagicBento data={TeamData} />
        </div>

      </div>
    </div>
  );
}

export default App;