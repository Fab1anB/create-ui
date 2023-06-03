import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectViewComponent } from './create-project-view.component';

describe('ProjectsPageComponent', () => {
  let component: CreateProjectViewComponent;
  let fixture: ComponentFixture<CreateProjectViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProjectViewComponent]
    });
    fixture = TestBed.createComponent(CreateProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
