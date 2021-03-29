import { Media, MediaObject } from '@ionic-native/media/ngx';
import { disableDebugTools } from '@angular/platform-browser';
import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class RecorderService {
  public mediaRecorder;
  public save;
  public audio;
  public audioChunks = [];
  public colletion = [];
  public filePath;
  public recordedAudio;
  private recorder: MediaObject;

  public constructor(private media: Media, private file: File, private platform: Platform) {

  }

  public record() {
      if (this.platform.is('ios')) {
          this.file.createFile(this.file.tempDirectory, 'temp.m4a', true).then(() => {
              this.recorder = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'temp.m4a');
              this.recorder.startRecord();
              this.recorder.onError.subscribe(error => console.log('Error!', error));
          }).catch((error) => {
              console.log(error);
          });
      } else if (this.platform.is('android')) {
          this.filePath = this.file.externalRootDirectory.replace(/^file:\/\//, '')  + 'temp.3gp';
          this.recorder = this.media.create(this.filePath);
          this.recorder.startRecord();
          this.recorder.onError.subscribe(error => console.log('Error!', error));
      }
  }

  public stop() {
      return new Observable((observer: Observer<{ file; name }>) => {
          this.recorder.stopRecord();

          if (this.platform.is('ios')) {
              this.file.readAsDataURL(this.file.tempDirectory, 'temp.m4a').then((base64File) => {
                  observer.next({ file: base64File, name: this.getFileName() });

                  this.recordedAudio = base64File;
              }).catch((error) => {
                  console.log('file error', error);
              });
          } else if (this.platform.is('android')) {
              this.file.readAsDataURL(this.file.externalRootDirectory, 'temp.3gp').then((base64File) => {
                  observer.next({ file: base64File, name: this.getFileName() });
                  this.recordedAudio = base64File;
              }).catch((error) => {
                  console.log('file error', error);
              });
          }
      });
  }

  public play(chunk) {
      if (chunk) {
          this.audio = new Audio(chunk.aud);
          this.audio.play();
      }
  }

  public pause() {
      this.audio.pause();
  }

  public transformBlob(value) {
      const reader = new FileReader();

      reader.onload = (e) => {
          localStorage.setItem('img_source', JSON.stringify(reader.result)); // stores the image to localStorage
      };

      reader.readAsDataURL(value);
  }

  private getFileName() {
      return Math.random().toString(36).substr(2, 9) + '_audio.m4a';
  }
}
