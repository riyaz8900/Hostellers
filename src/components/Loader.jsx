import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

function Loader() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-white">
            <div className="custom-yellow-loader">
  <RotatingLines
    visible={true}
    height="96"
    width="96"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
  />
</div>

        </div>
    );
}

export default Loader;
