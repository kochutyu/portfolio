import { Tag } from './tag.interface';

export interface Work {
    id?: string;
    author: string;
    date: Date;
    tags: string[];
    projectFeatures: string[];
    sliderImgURL: string[];
    showDemoURL: string;
    descriptionWork: string;
}

export interface IWorkInfo {
    author: string;
    date: Date
}

export interface IAbout {
    id?: string;
    sliderImgURL: string[];
    descriptionAbout: string;
}

export interface IProgress {
    tag: string;
    percent: string;
}

export interface ITags {
    tags: string[];
}

export interface IUser { 
    id?: string;
    login: string;
    password: string;
    returnSecureToken?: boolean
}

export interface FbAuthResponse {
    idToken: string,
    expiresIn: string
}

export interface INavigate{
    text: string;
    path: string;
}