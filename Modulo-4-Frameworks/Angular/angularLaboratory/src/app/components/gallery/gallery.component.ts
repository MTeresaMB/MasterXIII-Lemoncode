import { GalleryService } from './../../services/gallery.service';
import { Component } from '@angular/core';
import { PictureEntity } from '../../model/gallery.vm';
import { Observable, interval } from 'rxjs';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  pictureList!: PictureEntity[];
  currentPicture!: PictureEntity;
  currentScale!: number;
  isPlayingGallery!: boolean;
  intervalActivated: any;
  firstPagineImage!: number;
  lastPagineImage!: number;

  constructor(public galleryService: GalleryService){
    this.galleryService.getPictureList().then((list) => {
      this.pictureList = list;
      this.currentPicture = list[0];
      this.currentScale = 1;
      this.isPlayingGallery = false;
      this.firstPagineImage = 0;
      this.lastPagineImage = 3;
    })
  }

  setListPagination(action: string = 'none'): void{
    if(action === 'sum' && this.lastPagineImage < this.pictureList.length){
      this.firstPagineImage += 3;
      this.lastPagineImage += 3;
    } else if (action === 'rest' && this.firstPagineImage > 0){
      this.firstPagineImage -= 3;
      this.lastPagineImage -= 3;
    }
  }

  setCurrentPicture(picture: PictureEntity): void{
    this.currentScale = 1;
    this.currentPicture = picture;
  }

  checkIfLastIndex():boolean{
    return (this.currentPicture.id === this.pictureList[this.pictureList.length - 1].id);
  }

  handleZoomIn():void {
    this.currentScale = this.currentScale + 1;
  }

  handleZoomOut():void {
    this.currentScale = this.currentScale - 1;
  }

  handleNextPicture(): void{
    if(this.checkIfLastIndex()) {
      this.setCurrentPicture(this.pictureList[0]);
    } else {
      const index = this.pictureList.findIndex((element) => element.id === this.currentPicture.id) + 1;
      this.setCurrentPicture(this.pictureList[index]);
    }
  }

  handlePreviousPicture(): void{
    const index = this.pictureList.findIndex((element) => element.id === this.currentPicture.id) - 1;
    this.setCurrentPicture(this.pictureList[index])
  }

  handlePlayGallery(): void {
    if(!this.isPlayingGallery){
      this.isPlayingGallery = true;
      this.intervalActivated = interval(5000).subscribe(() => {this.handleNextPicture()});
    }
  }

  handleStopGallery(): void {
    if(this.isPlayingGallery && this.intervalActivated) {
      this.isPlayingGallery = false;
      this.intervalActivated.unsubscribe();
      this.intervalActivated = null;
    }
  }

}