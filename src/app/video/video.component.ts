import { Component } from '@angular/core';


@Component({
  selector: 'app-video',
  template: `
    <video controls>
      <source [src]="videoUrl" type="video/mp4">
    </video>
  `,
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  videoUrl: string = 'https://d1ne3nxzty7ofd.cloudfront.net/clients/qcc/aws/s2021/20230514184913.mp4';
}
