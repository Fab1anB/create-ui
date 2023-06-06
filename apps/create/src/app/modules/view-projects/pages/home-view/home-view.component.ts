import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {
  ProjectCategoryChipsComponent
} from "../../../create-project/components/project-category-chips/project-category-chips.component";

@Component({
  selector: 'create-ui-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent {

  @ViewChild('projectCategoryChipsComponent')
  public projectCategoryChipsComponent: ProjectCategoryChipsComponent | null = null;


  public async search(category: string): Promise<void> {
    await this.router.navigate(['/projects'], { queryParams: { category } });
  }

  constructor(private router: Router) {}

  public async searchByInputField(): Promise<void> {
    const category = this.projectCategoryChipsComponent?.categories.join(', ');
    await this.router.navigate(['/projects'], { queryParams: { category: this.projectCategoryChipsComponent?.categories } });
  }
}
