import { WorkInfo } from '../interface/work-info.interface';

export class IWorkInfo implements WorkInfo{ 
    constructor(
        public img: string,
        public textData: string
    ) {
        
    }
}