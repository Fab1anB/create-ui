import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'create-ui-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent {
  public async search(category: string): Promise<void> {
    await this.router.navigate(['/projects'], { queryParams: { category } });
  }

  constructor(private router: Router) {}
}
