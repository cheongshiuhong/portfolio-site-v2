// Types
import { BaseQuery } from '@interfaces/home/content';

// Libraries
import React, { FC, ReactElement } from 'react';

// Code
import useRouter from '@components/hooks/useRouter';
import EducationRow from './EducationRow';

// Data
import { educations } from '@data/educations';

/**
 * The Educations Component
 *
 * @returns {ReactElement} - The educations component. 
 */
const Educations: FC = (): ReactElement => {
    const { updateQuery } = useRouter<BaseQuery>();

    return (
        <div className="pr-3 py-3 flex flex-col after:h-6">
            {Object.entries(educations).map(([slug, education]) => (
                <button key={slug} onClick={() => updateQuery({ slug })}>
                    <EducationRow item={education} />
                </button>
            ))}
        </div>
    );
};

export default Educations;
