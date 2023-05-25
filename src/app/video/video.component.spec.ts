import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponent } from './video.component';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoComponent]
    });
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a source URL', () => {
    const videoElement: HTMLVideoElement = fixture.nativeElement.querySelector('video');
    const sourceElement: HTMLSourceElement = videoElement.querySelector('source');
    expect(sourceElement.src).toBe('http://path-to-your/video.mp4');
  });
});
