import { Tag } from '../interface/tag.interface';

export class ITag implements Tag {
    constructor(
        public tag: string,
        public id?: number
    ) {
        
    }
}
