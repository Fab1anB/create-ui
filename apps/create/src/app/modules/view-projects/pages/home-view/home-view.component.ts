import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {
  ProjectCategoryChipsComponent
} from "../../../create-project/components/project-category-chips/project-category-chips.component";
import {Observable} from "rxjs";
import {ProjectsApiService} from "../../services/projects-api.service";

@Component({
  selector: 'create-ui-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent {
  public staticChips = ['Balkon', 'Wohnzimmer', 'Küche', 'Terrasse'];

  @ViewChild('projectCategoryChipsComponent')
  public projectCategoryChipsComponent: ProjectCategoryChipsComponent | null = null;

 public trendingChips$: Observable<string []> = this.projectsApiService.getTrendingSearches();


  public async search(category: string): Promise<void> {
    await this.router.navigate(['/projects'], { queryParams: { category } });
  }

  constructor(private router: Router, private projectsApiService: ProjectsApiService) {}

  public async searchByInputField(): Promise<void> {
    const category = this.projectCategoryChipsComponent?.categories.join(', ');
    await this.router.navigate(['/projects'], { queryParams: { category: this.projectCategoryChipsComponent?.categories } });
  }
}
