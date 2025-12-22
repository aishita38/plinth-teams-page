import React from 'react';
import bgImage from './assets/bg.png';
import MagicBento from './MagicBento';
import SideComponent from './SideComponent';

function HomePage() {

    return (
        <div
            className='bg-cover bg-center bg-no-repeat min-h-screen w-full flex items-center justify-center'
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Side Component - Only visible on large screens */}
            <SideComponent />

            <div className="flex flex-col items-center w-full lg:pr-96">

                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-white' style={{ fontFamily: 'Nebula, Montserrat, Poppins, sans-serif', marginBottom: '2rem' }}>
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
