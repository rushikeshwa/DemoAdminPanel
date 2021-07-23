import { TestBed } from '@angular/core/testing';

import { ImageSliderService } from './image-slider.service';

describe('ImageSliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageSliderService = TestBed.get(ImageSliderService);
    expect(service).toBeTruthy();
  });
});
