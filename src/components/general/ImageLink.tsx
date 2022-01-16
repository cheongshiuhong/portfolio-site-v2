// Types
import { ImageLinkProps } from '@interfaces/general/ImageLink';

// Libraries
import React, { FC, ReactElement, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * The Image Link Component
 * 
 * @param {ImageLinkProps} - The children and image props.
 * @returns {ReactElement} - The image link component.
 */
const ImageLink: FC<ImageLinkProps> = ({
    children,
    exitOnMount=false
}: ImageLinkProps): ReactElement => {
    const [mounted, setMounted] = useState<boolean>(true)

    return (
        <>
            {(mounted || !exitOnMount) && (
                <motion.div
                    initial={{ scale: 0.3 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.1, transition: { duration: .3 } }}
                    whileHover={{ scale: [1, 1.08, 1.05], transition: { duration: .3 } }}
                    whileTap={{ scale: 0.5, transition: { duration: .3} }}
                    onClick={() => setMounted(false)}
                    >
                    {children}
                </motion.div>
            )}
        </>
    );
};

export default ImageLink;
