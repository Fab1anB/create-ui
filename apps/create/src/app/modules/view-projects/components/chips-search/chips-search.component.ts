import {Component, computed, EventEmitter, Input, Output, signal,} from '@angular/core';

@Component({
  selector: 'create-ui-chips-search',
  templateUrl: './chips-search.component.html',
  styleUrls: ['./chips-search.component.scss'],
})
export class ChipsSearchComponent {
  public _context = signal(this.context);

  @Input()
  public set context(value: 'static' | 'trending' | undefined) {
    this._context.set(value);
  }

  @Output()
  public readonly selectCategory = new EventEmitter<string>();

  staticChips: string[] = ['Holz', 'Metall', 'Kunststoff', 'Textil'];

  trendingChips: string[] = ['Beton', 'Glas', 'Keramik', 'Papier'];

  categories = computed(() =>
    this._context() === 'static' ? this.staticChips : this.trendingChips
  );

  onSelectCategory(category: string) {
    this.selectCategory.next(category);
  }
}
