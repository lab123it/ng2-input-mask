/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MaskService } from './mask.service';

describe('MaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaskService]
    });
  });

  it('should ...', inject([MaskService], (service: MaskService) => {
    expect(service).toBeTruthy();
  }));
});
