import { TestBed } from '@angular/core/testing';

import { DataPonentesService } from './data-ponentes.service';

describe('DataPonentesService', () => {
  let service: DataPonentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPonentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
