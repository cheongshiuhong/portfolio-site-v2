// Types
import { SphereProps } from '@interfaces/background/Sphere';

// Library
import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

const Sphere: React.FC<SphereProps> = ({
    textureFile,
    radius,
    position,
    rotateX,
    rotateY
}: SphereProps): React.ReactElement => {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useTexture(textureFile);

    useFrame(() => {
        if (meshRef.current && rotateX) {
            meshRef.current.rotation.x += rotateX;
        }
        if (meshRef.current && rotateY) {
            meshRef.current.rotation.y += rotateY;
        }
    });
    return (
        <mesh ref={meshRef} position={position} castShadow>
            <ambientLight intensity={1} />
            <sphereGeometry attach="geometry" args={[radius, 32, 32]} />
            <meshStandardMaterial attach="material" map={texture} normalMap={texture} />
        </mesh>
    );
};

export default Sphere;
