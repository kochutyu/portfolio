import { Injectable } from '@angular/core';
import { IAbout, Work, IProgress, ITags } from '../../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  about: IAbout = {
    id: null,
    descriptionAbout: null,
    sliderImgURL: null
  }

  works: Work[];

  progressWorksNotFiltered: ITags[];
  progressWorksFiltered: IProgress[] = [];
  constructor() { }


  getProgressPercent(): void {
    const objectStr: any[] = this.progressWorksNotFiltered.map(work => {
      return { tag: work.tags.join(',') } // get arrObj
    });

    let tagStr: string = '';

    objectStr.forEach(tag => {
      tagStr = `${tagStr},${tag.tag}` // get fall str with all tags
    })

    let allTags: string[] = tagStr.match(/([a-zA-Z]+)/g);

    allTags.forEach(items => {
      const tag = allTags.filter(item => item === items); // get count same tags

      const IProgress: IProgress = {
        tag: tag[0],
        percent: (tag.length * 100 / this.works.length).toString()
      }

      if (items === tag[0]) { // if exist tag in allArr
        this.progressWorksFiltered.push(IProgress);
      }

      allTags = allTags.filter((item, i) => item !== items); // delete the same tags
    });

    this.progressWorksFiltered = this.progressWorksFiltered.sort((a, b) => +b.percent - +a.percent)
  }
}
