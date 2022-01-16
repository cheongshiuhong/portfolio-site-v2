// Library
import React, { FC, ReactElement } from 'react';
import Head from 'next/head';

// Code
import CustomHead from '@components/general/CustomHead';
import Home from '@components/home';

/**
 * The Home Page
 *
 * @returns {ReactElement} - The home page.
 */
const HomePage: FC = (): ReactElement => {
    return (
        <div>
            <CustomHead />
            <Head>
                <title>Ron Cheong</title>
                <meta name="description" content="Ron Cheong Shiu Hong's Portfolio Site" />
                <link rel="icon" href="/ron.jpg" />
            </Head>
            <Home />
        </div>
    );
};

export default HomePage;
