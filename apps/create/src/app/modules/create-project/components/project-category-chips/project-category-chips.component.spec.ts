import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCategoryChipsComponent } from './project-category-chips.component';

describe('ProjectCategoryChipsComponent', () => {
  let component: ProjectCategoryChipsComponent;
  let fixture: ComponentFixture<ProjectCategoryChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectCategoryChipsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCategoryChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
