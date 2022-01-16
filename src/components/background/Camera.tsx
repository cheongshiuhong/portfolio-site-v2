// Libraries
import React, { FC, ReactElement } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

/**
 * The Camera Component
 *
 * @returns {ReactElement} - The camera component.
 */
const Camera: React.FC = (): React.ReactElement => {
    const { camera, gl } = useThree();

    return <OrbitControls args={[camera, gl.domElement]} autoRotate={true} enableZoom={true} />;
};

export default Camera;
