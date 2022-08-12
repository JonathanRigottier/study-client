import { TestBed } from '@angular/core/testing';

import { Course.ServiceService } from './course.service.service';

describe('Course.ServiceService', () => {
  let service: Course.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Course.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
