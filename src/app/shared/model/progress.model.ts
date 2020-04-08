import { Progress } from '../interface/progress.interface';

export class IProgress implements Progress {
    constructor(
        public subject: string,
        public progress: number
    ) {}
}
