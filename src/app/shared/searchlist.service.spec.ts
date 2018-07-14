import { TestBed, inject } from '@angular/core/testing';

import { SearchlistService } from './searchlist.service';

describe('SearchlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ SearchlistService ]
    });
  });

  it('should be created', inject([ SearchlistService ], (service: SearchlistService) => {
    expect(service).toBeTruthy();
  }));
});
