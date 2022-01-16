// Types
import { SkyboxProps } from '@interfaces/background/Skybox';

// Library
import React, { FC, ReactElement, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { useCubeTexture } from '@react-three/drei';

/**
 * Hooks for using the Skybox
 *
 * @param {SkyboxProps} - The files for the skybox.
 * @returns {ReactElement} - An empty component. 
 */
const Skybox: FC<SkyboxProps> = ({ path, textureFiles }: SkyboxProps): ReactElement => {
    const { scene } = useThree();
    const texture = useCubeTexture(textureFiles, { path: path });

    useEffect(() => {
        if (texture) {
            scene.background = texture;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [texture]);

    return <></>;
};

export default Skybox;
