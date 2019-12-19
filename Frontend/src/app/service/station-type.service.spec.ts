import { TestBed } from '@angular/core/testing';

import { StationTypeService } from './station-type.service';

describe('StationTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StationTypeService = TestBed.get(StationTypeService);
    expect(service).toBeTruthy();
  });
});
