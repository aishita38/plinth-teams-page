import React from 'react';
import sideCompImage from './assets/side_comp.png';

const SideComponent = () => {
    return (
        <div className="fixed right-0 top-0 h-screen w-96 hidden lg:flex items-center justify-center p-4">
            <img
                src={sideCompImage}
                alt="Side Component"
                className="w-full h-auto object-contain"
            />
        </div>
    );
};

export default SideComponent;
