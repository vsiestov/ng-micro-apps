import { TestBed } from '@angular/core/testing';

import { ElementLoaderService } from './element-loader.service';

describe('ElementLoaderService', () => {
  let service: ElementLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
