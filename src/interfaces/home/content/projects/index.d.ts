import { BaseQuery } from '@interfaces/home/content';

export type ProjectsQuery = BaseQuery & {
    type?: string | string[];
    skills?: string | string[];
};
