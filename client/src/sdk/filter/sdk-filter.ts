import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '@commons/translations/translation.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'sdk-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sdk-filter.html',
  styleUrl: './sdk-filter.scss'
})
export class SdkFilter {
  @Output() changed = new EventEmitter<string>();

  private input$ = new Subject<string>();
  public readonly filterLabel = inject(TranslationService).translation.commons.filter;

  constructor() {
    this.input$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(value => this.changed.emit(value.trim()));
  }

  onInput(value: string) {
    this.input$.next(value);
  }
}
