type BaseType = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    darkModeImage?: string;
    startDate: string;
    endDate: string;
};

type File = {
    title: string;
    url: string;
    thumbnail: string;
};

export type Skill = {
    title: string;
    category: {
        value: string;
        label: string;
        color: string;
    };
};

export type Teammate = {
    name: string;
    url: string;
};

export type Project = BaseType & {
    codeUrl?: string;
    projectUrl?: string;
    experience?: string;
    education?: string;
    skills: string[];
    skillsToShow: number;
    type: {
        value: string;
        label: string;
        display: string;
    };
    teammates: string[];
    files: File[];
};

export type Experience = BaseType & {
    projects: string[];
    skills: string[];
    skillsToShow: number;
    files: File[];
};

export type Education = BaseType & {
    url?: string;
    files: File[];
};

export type Item = Project | Experience | Education;
