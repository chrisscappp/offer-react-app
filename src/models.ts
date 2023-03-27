export interface IUser {
    id: number,
    name: string,
    age: number,
    login: string,
    password: string,
    developer: string,
    role: "admin" | "user",
    portfolio?: IProject[],
    skills?: string[],
    education?: IEducation[],
    contacts?: IContacts
}

export interface IProject {
    projectId: number,
    projectTitle: string,
    projectLink: string
}

export interface IEducation {
    eduId: number,
    eduName: string,
    eduYearOf: string
}

export interface IContacts {
    phone?: string,
    email?: string,
    vkLink?: string,
    telegramLink?: string
}