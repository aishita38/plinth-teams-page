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

  return (
    <div
      className='min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-10'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <MagicBento data={TeamData} />
    </div>
  );
}

export default App;