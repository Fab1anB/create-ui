import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'create-ui-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Output()
  public readonly toggleSidenav = new EventEmitter<void>();
}
