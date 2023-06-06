import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {debounceTime, map, Observable, startWith, switchMap} from 'rxjs';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ProjectCategoriesService} from '../../services/project-categories.service';

@Component({
  selector: 'create-ui-project-category-chips',
  templateUrl: './project-category-chips.component.html',
  styleUrls: ['./project-category-chips.component.scss'],
})
export class ProjectCategoryChipsComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryControl = new FormControl('');

  filteredFruits$: Observable<string[]> =
    this.categoryControl.valueChanges.pipe(
      debounceTime(300),
      startWith(null),
      switchMap((category) =>
        this.projectCategoriesService.findFuzzyCategories(category || '')
      ),
      map((categories) => categories.map((c) => c.title))
    );

  categories: string[] = [];

  @ViewChild('categoryInput') categoryInput:
    | ElementRef<HTMLInputElement>
    | undefined = undefined;

  constructor(private projectCategoriesService: ProjectCategoriesService) {}

  public add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.categories.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.categoryControl.setValue(null);
  }

  public remove(fruit: string): void {
    const index = this.categories.indexOf(fruit);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    if (!this.categoryInput) return;

    this.categories.push(event.option.viewValue);
    this.categoryInput.nativeElement.value = '';
    this.categoryControl.setValue(null);
  }
}
