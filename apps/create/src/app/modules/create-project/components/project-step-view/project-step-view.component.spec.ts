import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectStepViewComponent } from './project-step-view.component';

describe('ProjectStepViewComponent', () => {
  let component: ProjectStepViewComponent;
  let fixture: ComponentFixture<ProjectStepViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectStepViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectStepViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
