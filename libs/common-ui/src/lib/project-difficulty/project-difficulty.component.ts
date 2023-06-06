import {Component, computed, EventEmitter, Input, OnInit, Output, Signal, signal, WritableSignal,} from '@angular/core';

@Component({
  selector: 'create-ui-project-difficulty',
  templateUrl: './project-difficulty.component.html',
  styleUrls: ['./project-difficulty.component.scss'],
})
export class ProjectDifficultyComponent implements OnInit {
  private _difficulty: WritableSignal<number | undefined> = signal(undefined);
  @Input()
  public set difficulty(value: number | undefined) {
    this._difficulty.set(value);
  }

  public get difficulty(): number | undefined {
    return this._difficulty();
  }

  public savedDifficulty: number | undefined = undefined;

  @Output()
  public difficultyChange = new EventEmitter<number>();

  @Input()
  public editable = false;

  public maxDifficulty = 5;

  ngOnInit(): void {
    this.savedDifficulty = this.difficulty;
  }
  public difficultyArray: Signal<{ isActive: boolean }[]> = computed(() =>
    Array.from({
      length: this.maxDifficulty,
    }).map((_, index) => ({ isActive: index < (this.difficulty || 0) }))
  );

  public onSelectDifficulty(index: number): void {
    if (!this.editable) {
      return;
    }
    this.difficulty = index + 1;
    this.savedDifficulty = this.difficulty;
    this.difficultyChange.emit(this.difficulty || 0);
  }

  onMouseOver($event: MouseEvent) {
    if (!this.editable) {
      return;
    }
    const target = $event.target as HTMLElement;
    const index = target.id;
    if (index) {
      this.difficulty = Number(index) + 1;
    }
  }

  onMouseLeave() {
    if (!this.editable) {
      return;
    }

    this.difficulty = this.savedDifficulty;
  }
}
