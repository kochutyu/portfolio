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