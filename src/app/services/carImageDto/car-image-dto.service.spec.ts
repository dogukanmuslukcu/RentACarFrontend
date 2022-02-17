import { TestBed } from '@angular/core/testing';

import { CarImageDtoService } from './car-image-dto.service';

describe('CarImageDtoService', () => {
  let service: CarImageDtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarImageDtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
