import { Component, OnInit, Input } from '@angular/core';
import { EvMediaService } from '../ev-media/ev-media.service';

@Component({
    selector: 'app-ev-media-show',
    templateUrl: './ev-media-show.component.html',
    styleUrls: ['./ev-media-show.component.scss'],
})
export class EvMediaShowComponent implements OnInit {
  @Input() public images;
  @Input() public audios;

  public showAttachment = true;

  public constructor(private mediaService: EvMediaService) { }

  public ngOnInit() {}

  public changeAttachment() {
      this.showAttachment = !this.showAttachment;
  }

  public removeImage(index) {
      this.images.splice(index, 1);
      this.mediaService.setImages(this.images);
  }

  public removeAudio(index) {
      this.audios.splice(index, 1);
      this.mediaService.setAudios(this.audios);
  }
}
