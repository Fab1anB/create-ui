import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectStepCreateComponent } from './project-step-create.component';

describe('ProjectStepCreateComponent', () => {
  let component: ProjectStepCreateComponent;
  let fixture: ComponentFixture<ProjectStepCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectStepCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectStepCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
