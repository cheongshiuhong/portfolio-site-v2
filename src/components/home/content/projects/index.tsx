// Types
import { Project, Skill } from '@interfaces/data';
import { ProjectsQuery } from '@interfaces/home/content/projects';

// Libraries
import React, { FC, ReactElement, useState, useEffect } from 'react';
import Select from 'react-select';

// Code
import useRouter from '@components/hooks/useRouter';
import ProjectRow from './ProjectRow';

// Data
import { projects, projectTypes } from '@data/projects';
import { skills } from '@data/skills';

const relevantSkills: Record<string, Skill> = {};
Object.values(projects).forEach((project) =>
    project.skills.forEach((skill) =>
        relevantSkills[skill] = skills[skill]));

/**
 * The Projects Component
 *
 * @returns {ReactElement} - The projects component. 
 */
const Projects: FC = (): ReactElement => {
    const { query, updateQuery } = useRouter<ProjectsQuery>();
    const [data, setData] = useState<Record<string, Project>>(projects);

    useEffect(() => {
        const filteredData = Object.fromEntries(Object.entries(projects).filter(([key, project]) => { 
            return (
                !query.type || query.type.includes(project.type.value)
            ) && (
                !query.skills || project.skills.some((skill) => query.skills?.includes(skill))
            );
        }));
        setData(filteredData);
    }, [query]);

    return (
        <div>
            {/* Search bar */}
            <div className="px-6 py-3 flex flex-col md:flex-row w-full
                space-y-4 md:space-y-0 md:space-x-6 text-sm lg:text-base">
                <div className="w-full md:w-1/2">
                    <p className="pl-1 pb-1">Project Types</p>
                    <span className="text-sm text-slate-900">
                        <Select
                            options={Object.values(projectTypes)}
                            isMulti
                            onChange={(items) => items && updateQuery({ type: items.map((item) => item.value) })}
                        />
                    </span>
                </div>
                <div className="w-full md:w-1/2">
                    <p className="pl-1 pb-1">Skills/Tools used</p>
                    <span className="text-sm text-slate-900">
                        <Select
                            options={Object.entries(relevantSkills).map(([key, skill]) =>
                                ({ value: key, label: skill.title }))}
                            isMulti
                            onChange={(items) => items && updateQuery({ skills: items.map((item) => item.value) })}
                        />
                    </span>
                </div>
            </div>

            {/* Projects list */}
            <div className="pr-3 py-3 flex flex-col after:h-6">
                {Object.entries(data).map(([slug, project]) => (
                    <button key={slug} onClick={() => updateQuery({ slug })}>
                        <ProjectRow item={project} />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Projects;
