import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Work } from 'src/app/shared/interface/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewWorkService {
  tags: string[] = [];
  projectFeatures: string[] = [];
  sliderImgURL: string[] = [];
  filter: string[] = ['All works'];

  editStatus: boolean;

  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  addImg(url: string): void {
    const existWord: string[] = this.sliderImgURL.filter(item => item === url);
    if (!existWord[0]) {
      this.sliderImgURL.push(url.trim());
    } else {
      alert('exist');
    }
  }

  removeImg(url: string): void {
    this.sliderImgURL = this.sliderImgURL.filter(item => item !== url);
  }

  setOnPreview(url: string): void {
    this.sliderImgURL = this.sliderImgURL.filter(item => item !== url);
    this.sliderImgURL.unshift(url);
  }

  addTag(tag: string): void {
    const existWord: string[] = this.tags.filter(item => item === tag);
    if (!existWord[0]) {
      this.tags.push(tag.trim());
    } else {
      alert('exist');
    }
  }

  removeTag(tag: string): void {
    this.tags = this.tags.filter(item => item !== tag);
  }

  addProjectFeatures(projectFeature: string): void {
    const existWord: string[] = this.projectFeatures.filter(item => item === projectFeature);
    if (!existWord[0]) {
      this.projectFeatures.push(projectFeature.trim());
    } else {
      alert('exist');
    }
  }

  removeProjectFeatures(projectFeature: string): void {
    this.projectFeatures = this.projectFeatures.filter(item => item !== projectFeature);
  }

  updateWork(work: Work): void {
    this.editStatus = false;
    this.firestore.collection('works').doc(work.id).update(work);
  }

  addFilter(filter: string): void{
    const existWord: string[] = this.filter.filter(item => item === filter);
    if (!existWord[0]) {
      this.filter.push(filter.trim());
    } else {
      alert('exist');
    }
  }
  
  removeFilter(filter: string): void {
    this.filter = this.filter.filter(item => item !== filter);
  }

  reset(): void {
    this.projectFeatures = [];
    this.sliderImgURL = [];
    this.tags = [];
    this.filter = ['All works'];
  }
}
