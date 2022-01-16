// Libraries
import React, { FC, ReactElement } from 'react';

// Code
import useRouter from '@components/hooks/useRouter';

/**
 * The About Component
 *
 * @returns {ReactElement} - The about component. 
 */
const About: FC = (): ReactElement => {
    const { redirect } = useRouter();

    return (
        <div className="h-full w-full px-6 md:px-12 lg:px-16 xl:px-20 py-16 h-lg:py-14 space-y-10 text-lg text-center leading-8">
            <div>
                Ron is a final year <strong>First-Class Honours</strong> undergraduate at the Singapore University of Social
                Sciences (SUSS), majoring in <strong>Finance</strong> and minoring in  <strong>Algorithmic Development (Math)</strong>.
            </div>
            <div>
                He is fascinated by the applications of Math and Technology in the
                realm of Finance, where he has excelled in school courses like Mathematics and
                Programming for Finance, Portfolio Management, and Derivative Securities.
            </div>
            <div>
                In his undergraduate years, he had completed internships in the roles of an&nbsp;
                <span
                    className="hover:underline hover:cursor-pointer"
                    onClick={() => redirect('/', { view: 'experiences', slug: 'shopee-automation-internship'} )}>
                    <strong>Automation Specialist</strong> at <strong>Shopee</strong>
                </span>,
                as well as a&nbsp;
                <span
                    className="hover:underline hover:cursor-pointer"
                    onClick={() => redirect('/', { view: 'experiences', slug: 'solar-ai-software-engineering-internship' })}>
                    <strong>Software Engineer</strong> at <strong>Solar AI Technologies</strong>
                </span>.&nbsp;
                He then took on a full-time role as a&nbsp;
                <span
                    className="hover:underline hover:cursor-pointer"
                    onClick={() => redirect('/', { view: 'experiences', slug: 'plutus-mazu-quantitative-developer' })}>
                    <strong>Quantitative Developer</strong> at <strong>Plutus Mazu</strong>
                </span>,&nbsp;
                with a focus on performant algorithms and architecture for quantitative trading.
            </div>
            <div className="h-4"></div>
        </div>
    );
};

export default About;
