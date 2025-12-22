import React from 'react';
import bgImage from './assets/bg.png';
import MagicBento from './MagicBento';

function HomePage() {

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
                    <MagicBento />
                </div>

            </div>
        </div>
    );
}

export default HomePage;
