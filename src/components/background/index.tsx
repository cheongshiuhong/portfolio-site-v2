// Types
import { BackgroundProps } from '@interfaces/background';

// Libraries
import React, { FC, ReactElement, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

// Code
import Camera from './Camera';
import Sphere from './Sphere';
import Skybox from './Skybox';

/**
 * The Main Background Component
 *
 * @param {BackgroundProps} - The details of the browser.
 * @returns {ReactElement} - The background.
 */
const Background: FC<BackgroundProps> = ({ browserName }: BackgroundProps): ReactElement => (
    // Firefox has issues with the Canvas --> force to back (z-index -999)
    <Canvas className="top-0 left-0" style={{ position: 'fixed', zIndex: browserName == 'Firefox' ? -999 : 0 }}>
        <Suspense fallback={null}>
            {/* Some light */}
            <pointLight intensity={0.5} />
            
            {/* The camera */}
            <Camera />

            {/* The Skybox */}
            <Skybox
                path={'/assets/skybox'} 
                textureFiles={['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg']}
            />

            {/* Planets */}
            <Sphere
                textureFile="/assets/textures/earth.jpg"
                position={[1, 0, 2]}
                radius={1}
                rotateX={0.0001}
                rotateY={0.005}
            />
            <Sphere
                textureFile="/assets/textures/mars.jpg"
                position={[5, 1.5, 8]}
                radius={0.5}
                rotateX={0.0001}
                rotateY={0.003}
            />
            <Sphere
                textureFile="/assets/textures/jupiter.jpg"
                position={[50, 0.5, 36]}
                radius={8}
                rotateX={0.0002}
                rotateY={0.005}
            />
        </Suspense>
    </Canvas>
);

export default Background;
