// Libraries
import React, { FC, ReactElement, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Switch } from '@headlessui/react';

// Code
import useRouter from '@components/hooks/useRouter';
import useTheme from '@components/hooks/useTheme';
import VIEWS from '../views';

// Icons
import LinkedinIcon from '@components/general/icons/LinkedinIcon';
import GithubIcon from '@components/general/icons/GithubIcon';

// Media
import Avatar from '@public/ron.jpg';

/**
 * The Navigation Component
 *
 * @returns {ReactElement} - The navigation component.
 */
const Navigation: FC = (): ReactElement => {
    const { isReady: routerIsReady, query, setQuery } = useRouter<{ view: string }>();
    const { isDarkMode, toggleTheme } = useTheme();

    const containerRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number>(0);

    const handleKeyEnter = (event: React.KeyboardEvent, query: string) => {
        if (event.code === 'Enter') {
            setQuery({ view: query });
        }
    };

    /** Set the default view in the router if none provided */
    useEffect(() => {
        if (routerIsReady && !query.view) {
            setQuery({ view: VIEWS[0].value });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        if (containerRef.current) {
            const containerHeight = containerRef.current.clientHeight;
            setContentHeight(containerHeight);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerRef.current]);

    return (
        <div ref={containerRef} className="h-full w-full">
            <div className="py-8 h-md:py-10 h-lg:py-14 h-full w-full overflow-y-auto
                scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full
                scrollbar-thumb-gray-700 scrollbar-track-gray-300
                flex flex-col justify-between"
                style={{ maxHeight: contentHeight ? `${contentHeight}px` : '' }}>
                <div>
                    {/* Avatar */}
                    <div className="h-28 w-28 md:h-40 md:w-40 mx-auto rounded-full overflow-hidden">
                        <Image src={Avatar} alt="Avatar" />
                    </div>
                    {/* Name */}
                    <div className="mt-4 h-sm:mt-6 h-md:mt-8 h-lg:mt-14 leading-9 text-center text-2xl lg:text-3xl font-fancy">
                        <span>Ron</span>
                        &nbsp;
                        <span>Cheong</span>
                    </div>
                    {/* Icons */}
                    <div className="mt-4 h-sm:mt-6 h-md:mt-8 h-lg:mt-12 flex justify-center space-x-8">
                        <a href='https://www.linkedin.com/in/cheongshiuhong/' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
                            <LinkedinIcon
                                className="h-6 w-6 lg:h-8 lg:w-8"
                                fill={isDarkMode ? 'white' : 'black'}
                                stroke={isDarkMode ? 'white' : 'black'}
                            />
                        </a>
                        <a href='https://github.com/cheongshiuhong/' target='_blank' rel='noreferrer' aria-label='GitHub'>
                            <GithubIcon
                                className="h-6 w-6 lg:h-8 lg:w-8"
                                fill={isDarkMode ? 'white' : 'black'}
                                stroke={isDarkMode ? 'white' : 'black'}
                            />
                        </a>
                    </div>
                </div>
                {/* Views */}
                <div className="mt-12 mb-4 h-40% max-h-80
                    flex flex-col items-center justify-between
                    space-y-4 h-lg:space-y-10">
                    {VIEWS.map((view, index) => (
                        <div
                            key={view.value}
                            tabIndex={index + 1}
                            onClick={() => setQuery({ view: view.value })}
                            onKeyDown={(event) => handleKeyEnter(event, view.value)}
                            role="button"
                            className={`leading-8 text-lg hover:text-xl lg:text-xl lg:hover:text-2xl font-semibold ${
                                query.view === view.value && 'text-fuchsia-600'
                            }`}>
                            {view.label}
                        </div>
                    ))}
                    {/* <div className="text-lg hover:text-xl lg:text-xl lg:hover:text-2xl font-semibold">
                        <a tabIndex={VIEWS.length + 1} href="https://blog.roncheong.me" target="_blank" rel="noreferrer">
                            Blog
                        </a>
                    </div> */}
                </div>
                <div>
                    {/* Switch */}
                    <Switch.Group
                        as="div"
                        className="mt-8 lg:mt-10 flex justify-center items-end space-x-8">
                        <Switch.Label as="span" className="text-base lg:text-lg font-medium">
                            Dark Mode
                        </Switch.Label>
                        <Switch
                            checked={isDarkMode}
                            onChange={toggleTheme}
                            className={`${
                                isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
                            } relative flex items-center h-6 rounded-full w-11`}>
                            <span
                                className={`${
                                    isDarkMode ? 'translate-x-6' : 'translate-x-1'
                                } inline-block w-4 h-4 bg-white rounded-full
                                transform transition ease-in-out duration-200`}
                                />
                        </Switch>
                    </Switch.Group>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
