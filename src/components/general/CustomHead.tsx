// Libraries
import React, { FC, ReactElement } from 'react';
import Head from 'next/head';

/**
 * Custom Head Component for Tags
 *
 * @param {CustomHeadProps} - The props.
 * @returns {ReactElement} - The head component.
 */
const CustomHead: FC = (): ReactElement => {
    const baseTitle: string = 'Ron Cheong';
    const baseDescription: string = `
        ron cheong shiu hong personal portfolio site
        singapore university of social sciences suss
        shopee regional finance automation
        solar ai solarai software engineer engineering
        quant quantitative finance fintech fin-tech math algorithmic trading portfolio optimisation
        python javascript 
        frontend backend full stack full-stack developer django react reactjs next nextjs chakra chakraui chakra-ui graphql
        typescript postgresql influxdb sql query queries graphql rest restful api apis
    `;

    return (
        <Head>
            <title>{baseTitle}</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta property='og:image' content={'/ron.jpg'} />
            <meta name='description' content={baseDescription} />
        </Head>
    );
};

export default CustomHead;
