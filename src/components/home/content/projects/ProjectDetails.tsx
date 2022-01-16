// Types
import { Project } from '@interfaces/data';
import { DetailsProps, BaseQuery } from '@interfaces/home/content';

// Libraries
import React, { FC, ReactElement } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; 

// Code
import useRouter from '@components/hooks/useRouter';
import useTheme from '@components/hooks/useTheme';
import useMixpanel from '@components/hooks/useMixpanel';
import Badge from '@components/general/Badge';
import ImageLink from '@components/general/ImageLink';

// Icons
import GithubIcon from '@components/general/icons/GithubIcon';

// Data
import { skills } from '@data/skills';
import { experiences } from '@data/experiences';
import { educations } from '@data/educations';
import { teammates } from '@data/teammates';

/**
 * The Project Details Component
 *
 * @param {DetailsProps<Project>} - The project data.
 * @returns {ReactElement} - The project details component.
 */
const ProjectDetails: FC<DetailsProps<Project>> = ({ item }: DetailsProps<Project>): ReactElement => {
    const { setQuery } = useRouter<BaseQuery>();
    const { trackFileClick, trackTeammateClick } = useMixpanel();
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
                {/* Buttons */}
                <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: .3 }}
                    className="mt-6 flex space-x-4">
                    {item.projectUrl && (
                        <a href={item.projectUrl} target="_blank" rel="noreferrer" aria-label={`View Project: ${item.title}`}>
                        <button className={`
                            px-3 py-2 font-semibold rounded-md
                            text-sm lg:text-base
                            bg-slate-600 hover:bg-slate-700 text-slate-200
                            dark:bg-slate-400 dark:hover:bg-slate-500 dark:text-slate-900`}>
                            View Project
                        </button>
                        </a>
                    )}
                    {item.codeUrl && (
                        <a href={item.codeUrl} target="_blank" rel="noreferrer" aria-label={`View Project: ${item.title}`}>
                        <button className={`
                            px-3 py-2 flex space-x-2 font-semibold rounded-md
                            text-sm lg:text-base items-center
                            bg-slate-600 hover:bg-slate-700 text-slate-200
                            dark:bg-slate-400 dark:hover:bg-slate-500 dark:text-slate-900'`}>
                            <GithubIcon
                                height="20"
                                width="20"
                                className="text-slate-500"
                            />
                            <span>View Code</span>
                        </button>
                        </a>
                    )}
                </motion.div>
                {/* Text */}
                <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: .3 }}
                    className={`mt-6 text-slate-900 dark:text-slate-200`}>
                    {/* Title */}
                    <div className="text-lg lg:text-xl font-bold">
                        {item.title}
                    </div>
                    {/* Sub-title */}
                    <div className="mt-2 text-base lg:text-lg font-semibold">
                        {item.subtitle}
                    </div>
                    {/* Association */}
                    {(item.experience || item.education) && (
                        <div className="mt-2 text-sm lg:text-base">
                            Associated with&nbsp;
                            {item.experience && (
                                <>
                                    experience:&nbsp;
                                    <a
                                        aria-label={item.experience}
                                        className="underline hover:cursor-pointer"
                                        onClick={() => setQuery({ view: 'experiences', slug: item.experience })}>
                                        {experiences[item.experience].title}
                                    </a>
                                </>
                            )}
                            {item.experience && item.education && <><br />and&nbsp;</>}
                            {item.education && (
                                <>
                                    education:&nbsp;
                                    <a
                                        aria-label={item.education}
                                        className="underline hover:cursor-pointer"
                                        onClick={() => setQuery({ view: 'education', slug: item.education })}>
                                        {educations[item.education].title}
                                    </a>
                                </>
                            )}
                        </div>
                    )}
                    {/* Description */}
                    <div
                        className="mt-2 text-sm lg:text-base"
                        dangerouslySetInnerHTML={{ __html: item.description }}>
                    </div>
                </motion.div>
                {/* Skill badges */}
                <motion.div
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: .3 }}
                    className="mt-6 flex flex-wrap">
                    {item.skills.map((skill) => (
                        <Badge key={skill} color={skills[skill].category.color}>
                            {skill}
                        </Badge>
                    ))}
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
                                    text-slate-900 dark:text-slate-200`}>
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
                {/* Teammates */}
                {Boolean(item.teammates.length) && (
                    <div className="space-y-4">
                        <div className={`text-center font-bold text-sm lg:text-base
                            text-slate-900 dark:text-slate-200`}>
                            {item.teammates.length > 1 ? <>Teammates:</> : <>Teammate:</>}
                        </div>
                        <div className="flex flex-col items-center text-center space-y-3">
                            {item.teammates.map((teammate) => (
                                <a
                                    key={teammate}
                                    href={teammates[teammate].url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={teammates[teammate].name}
                                    className={`hover:scale-110
                                        text-slate-900 dark:text-slate-200`}
                                    onClick={() => trackTeammateClick(teammates[teammate].url)}>
                                    {teammates[teammate].name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectDetails;
