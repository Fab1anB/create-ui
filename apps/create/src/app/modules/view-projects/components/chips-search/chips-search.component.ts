import {Component, EventEmitter, Input, Output,} from '@angular/core';

@Component({
  selector: 'create-ui-chips-search',
  templateUrl: './chips-search.component.html',
  styleUrls: ['./chips-search.component.scss'],
})
export class ChipsSearchComponent {

  @Output()
  public readonly selectCategory = new EventEmitter<string>();

  @Input() chips: string[] | null = null;

  onSelectCategory(category: string) {
    this.selectCategory.next(category);
  }
}
