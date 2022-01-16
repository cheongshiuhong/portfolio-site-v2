// Types
import { Education } from '@interfaces/data';
import { DetailsProps, BaseQuery } from '@interfaces/home/content';

// Libraries
import React, { FC, ReactElement } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; 

// Code
import useRouter from '@components/hooks/useRouter';
import useTheme from '@components/hooks/useTheme';
import useMixpanel from '@components/hooks/useMixpanel';
import ImageLink from '@components/general/ImageLink';

/**
 * The Education Details Component
 *
 * @param {DetailsProps<Project>} - The education data.
 * @returns {ReactElement} - The education details component.
 */
const ProjectDetails: FC<DetailsProps<Education>> = ({ item }: DetailsProps<Education>): ReactElement => {
    const { setQuery, redirect } = useRouter<BaseQuery>();
    const { trackFileClick } = useMixpanel();
    const { isDarkMode } = useTheme();

    return (
        <div className={`flex flex-col lg:flex-row lg:space-x-8 space-y-8 pb-8`}>
            {/* Left area */}
            <div className="w-full lg:w-70%">
                {/* Image */}
                <motion.div
                    initial={{ y: -200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: .3 }}
                    className="relative h-44 md:h-72 w-full md:w-80%">
                    <Image
                        className="rounded-xl"
                        layout="fill"
                        src={isDarkMode ? (item.darkModeImage || item.image) : item.image}
                        alt="project image"
                        priority
                    />
                </motion.div>
                {/* Text */}
                <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: .3 }}
                    className={`mt-6 ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                    {/* Title */}
                    <div className="text-lg lg:text-xl font-bold">
                        {item.title}
                    </div>
                    {/* Sub-title */}
                    <div className="mt-2 text-base lg:text-lg font-semibold">
                        {item.subtitle}
                    </div>
                    {/* Description */}
                    <div
                        className="mt-2 text-sm lg:text-base"
                        dangerouslySetInnerHTML={{ __html: item.description }}>
                    </div>
                </motion.div>
            </div>

            {/* Right area */}
            <div className="relative w-full lg:w-30% space-y-8">
                {/* Files */}
                {Boolean(item.files.length) && (
                    <div className="flex flex-col items-center text-center space-y-3">
                        {item.files.map((file) => (
                            <div key={file.title} className="flex flex-col items-center space-y-1">
                                <p className={`mt-1 font-semibold text-sm lg:text-base
                                    ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                                    {file.title}
                                </p>
                                <ImageLink>
                                    <a
                                        href={file.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`${item.title} - ${file.title}`}
                                        onClick={() => trackFileClick(file.url)}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={file.thumbnail} alt={file.title} className="w-44 shadow-xl" />
                                    </a>
                                </ImageLink>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectDetails;
