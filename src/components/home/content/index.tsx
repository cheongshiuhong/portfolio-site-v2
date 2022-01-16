// Types
import { ContentProps, BaseQuery } from '@interfaces/home/content';
import { ProjectsQuery } from '@interfaces/home/content/projects';


// Libraries
import React, { FC, ReactElement, useState, useEffect, useRef } from 'react';

// Code
import Dialog from '@components/general/Dialog';
import useRouter from '@components/hooks/useRouter';
import VIEWS from '../views';
import About from './about';
import Projects from './projects';
import Experiences from './experiences';
import Educations from './educations';
import ProjectDetails from './projects/ProjectDetails';
import ExperienceDetails from './experiences/ExperienceDetails';
import EducationDetails from './educations/EducationDetails';

// Data
import { projects } from '@data/projects';
import { experiences } from '@data/experiences';
import { educations } from '@data/educations';

/**
 * The Content Component
 *
 * @returns {ReactElement} - The content component.
 */
const Content: FC<ContentProps> = ({
    isMobile,
    isNavDropdownOpen,
    toggleNavDropdown,
    navDropdown
}: ContentProps): ReactElement => {
    const { query, setQuery } = useRouter<BaseQuery | ProjectsQuery>();
    const parentRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number>(0);

    const getLabel = (query: string) => {
        const results = VIEWS.filter((view) => view.value === query);
        if (results.length) {
            return results[0].label;
        }
        return '-';
    };

    useEffect(() => {
        if (parentRef.current && headerRef.current) {
            const parentHeight = parentRef.current.clientHeight;
            const headerHeight = headerRef.current.clientHeight;
            setContentHeight(parentHeight - headerHeight);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [parentRef.current, headerRef.current]);

    return (
        <div ref={parentRef} className="h-full w-full">
            {/* Header */}
            <div
                ref={headerRef}
                className={`relative h-9 w-full flex items-center text-center
                    bg-gray-300 dark:bg-gray-800 shadow-xl`}>
                <div className="px-3 flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full bg-red-600"></div>
                    <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                    <div className="h-4 w-4 rounded-full bg-green-500"></div>
                </div>
                <div className={`absolute w-full text-center font-semibold text-gray-800 dark:text-gray-200`}>
                    {getLabel(query.view)}
                </div>
                {isMobile && (
                    <div className="absolute right-4">
                        <button
                            type="button"
                            onClick={toggleNavDropdown}
                            className={`transform transition-transform ease-in-out duration-500
                              text-slate-900 dark:text-slate-200
                                ${isNavDropdownOpen && 'rotate-180'}`}>
                            <svg
                                className="stroke-current"
                                width="16"
                                height="9"
                                viewBox="0 0 16 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 1L8 8L1 1"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        {isNavDropdownOpen && (
                            <div onClick={toggleNavDropdown} className="absolute right-0 z-30">
                                {navDropdown}
                            </div>
                        )}
                    </div>
                )}
            </div>
            {/* Body */}
            <div
                className="h-full w-full px-3 pt-2 pb-4 overflow-y-auto
                    scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full
                    scrollbar-thumb-gray-700 scrollbar-track-gray-300"
                style={{
                    maxHeight: `${contentHeight}px`
                }}>
                {query.view === 'about' && <About />}
                {query.view === 'projects' && <Projects />}
                {query.view === 'experiences' && <Experiences />}
                {query.view === 'education' && <Educations />}
            </div>

            {/* Dialog */}
            <Dialog
                isOpen={Boolean(query.slug)}
                close={() => setQuery({
                    ...Object.fromEntries(Object.entries(query).filter(([key, q]) => key != 'slug' )),
                    view: query.view
                })}>
                {query.slug && query.view == 'projects' && <ProjectDetails item={projects[query.slug]} />}
                {query.slug && query.view == 'experiences' && <ExperienceDetails item={experiences[query.slug]} />}
                {query.slug && query.view == 'education' && <EducationDetails item={educations[query.slug]} />}
            </Dialog>
        </div>
    );
};

export default Content;
