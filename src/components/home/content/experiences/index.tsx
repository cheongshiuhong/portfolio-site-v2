// Types
import { Skill } from '@interfaces/data';
import { BaseQuery } from '@interfaces/home/content';

// Libraries
import React, { FC, ReactElement } from 'react';

// Code
import useRouter from '@components/hooks/useRouter';
import ExperienceRow from './ExperienceRow';

// Data
import { experiences } from '@data/experiences';
import { skills } from '@data/skills';

const relevantSkills: Record<string, Skill> = {};
Object.values(experiences).forEach((experiences) =>
    experiences.skills.forEach((skill) =>
        relevantSkills[skill] = skills[skill]));

/**
 * The Experiences Component
 *
 * @returns {ReactElement} - The experiences component. 
 */
const Experiences: FC = (): ReactElement => {
    const { updateQuery } = useRouter<BaseQuery>();
    return (
        <div className="pr-3 py-3 flex flex-col after:h-6">
            {Object.entries(experiences).map(([slug, experience]) => (
                <button key={slug} onClick={() => updateQuery({ slug })}>
                    <ExperienceRow item={experience} />
                </button>
            ))}
        </div>
    );
};

export default Experiences;
