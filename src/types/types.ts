
export type Portfolio = {
    title:    string;
    subtitle: string;
    projects: Project[];
}

export type Project = {
    title:       string;
    description: string;
    image:       string;
    url:         string;
    date:        string;
    tech_stack:  TechStack[];
    modal_details?: ModalDetail[];
}

export type TechStack = {
    name: string;
    icon?: string;
}

export type ModalDetail = {
    image: string;
    description: string;
}

export type ProjectModalPayload = {
    project: Project;
    companyImage?: string;
    companyImages?: string[];
    companyName?: string;
    companyUrl?: string;
};

export type Resume = {
    name:            string;
    full_name:       string;
    position:        string;
    experience:      string;
    education:       string;
    languages_title: string;
    skills:          string;
    contact:         string;
    summary:         string;
    work_history:    WorkHistory[];
    university:      University;
    tech_skills:     TechSkill[];
    languages:       Language[];
    contact_info:    ContactInfo[];
}

export type ContactInfo = {
    title: string;
    icon:  string;
    url:   string;
}

export type Language = {
    language: string;
    level:    string;
}

export type TechSkill = {
    title:        string;
    tools:        string[];
    stars:    number;
    description?: string;
}

export type University = {
    start_date: string;
    end_date:   string;
    title:      string;
    school:     string;
}

export type WorkHistory = {
    start_date:   string;
    end_date:     string;
    is_current:   boolean;
    company:      string;
    company_image: string | string[];
    position:     string;
    description:  string;
    tasks:        string[];
    achievements: Project[];
}
