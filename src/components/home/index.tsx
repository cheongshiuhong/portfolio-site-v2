// Libraries
import React, { FC, ReactElement, useState } from 'react';
import dynamic from 'next/dynamic';

// Code
import Background from '@components/background';
import Navigation from './navigation';
import Content from './content';

// Dynamic imports
const Device = dynamic(() => import('@components/general/Device'), { ssr: false });

/**
 * The Home Component
 *
 * @returns {ReactElement} - The home component.
 */
const Home: FC = (): ReactElement => {
    const [isNavDropdownOpen, setIsNavDropdownOpen] = useState<boolean>(false);

    return (
        <Device>
            {({ browserName, isMobile }) => (
                <>
                    <Background browserName={browserName} />
                    <div className="h-screen w-screen z-0">
                        <div className={`h-full h-lg:max-h-320 w-full mx-auto
                            ${isMobile ? 'py-6' : 'py-6 h-md:py-28 h-lg:py-36'}
                            md:flex md:items-center md:justify-center
                            md:space-x-6 lg:space-x-12 xl:space-x-20`}>
                            <div className={`
                                h-full w-90% md:w-56 lg:w-64 2xl:w-80
                                mx-auto md:mx-0 rounded-xl shadow-xl 
                                overflow-hidden backdrop-filter backdrop-blur-md
                                bg-gray-300 text-slate-900 dark:bg-gray-900 dark:text-slate-200
                                ${browserName == 'Firefox' ? 'bg-opacity-80 dark:bg-opacity-80' : 'bg-opacity-40 dark:bg-opacity-40'}
                                hidden lg:block`}>
                                <Navigation />
                            </div>
                            <div className={`
                                h-full w-90% md:w-80% lg:w-176 xl:w-192 2xl:w-232
                                mx-auto md:mx-0 rounded-xl shadow-xl
                                overflow-hidden backdrop-filter backdrop-blur-md
                                bg-gray-300 text-slate-900 dark:bg-gray-900 dark:text-slate-200
                                ${browserName == 'Firefox' ? 'bg-opacity-80 dark:bg-opacity-80' : 'bg-opacity-40 dark:bg-opacity-40'}`}>
                                <Content
                                    isMobile={isMobile}
                                    isNavDropdownOpen={isNavDropdownOpen}
                                    toggleNavDropdown={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
                                    navDropdown={
                                        <div className={`overflow-y-auto w-60 rounded-xl shadow-xl backdrop-filter backdrop-blur-md bg-opacity-90
                                            bg-gray-300 text-slate-900 dark:bg-gray-700 dark:text-slate-200`}>
                                            <Navigation />
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Device>
    );
};

export default Home;
