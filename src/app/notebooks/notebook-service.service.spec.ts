import { TestBed } from '@angular/core/testing';

import { NotebookServiceService } from './notebook-service.service';

describe('NotebookServiceService', () => {
  let service: NotebookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotebookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
