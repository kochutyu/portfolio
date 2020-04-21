import { InputImg } from '../interface/input-img.interface';

export class IInputImg implements InputImg{
    constructor(
        public img: string,
        public placeholder: string,
        public formControlName: string
    ) {
        
    }
}
