import { TestBed } from '@angular/core/testing';

import { ProjectStepsService } from './project-steps.service';

describe('ProjectStepsService', () => {
  let service: ProjectStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
