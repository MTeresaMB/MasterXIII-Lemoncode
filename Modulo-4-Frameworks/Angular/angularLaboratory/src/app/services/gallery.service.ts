import { Injectable } from '@angular/core';
import { PictureEntity, pictureList } from '../model/gallery.vm';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  pictureGalleryList: PictureEntity[] = [];

  constructor() { }

  getPictureList(): Promise<PictureEntity[]> {
    return Promise.resolve(pictureList);
  }
}
