import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

function Loader() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-white">
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="#FFD700" 
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
            />
        </div>
    );
}

export default Loader;
