import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectDifficultyComponent } from './project-difficulty.component';

describe('ProjectDifficultyComponent', () => {
  let component: ProjectDifficultyComponent;
  let fixture: ComponentFixture<ProjectDifficultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectDifficultyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
