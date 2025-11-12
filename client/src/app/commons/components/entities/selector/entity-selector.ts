import { Component, DestroyRef, effect, inject, input, signal } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { map, Subscription } from 'rxjs';
import { IEntityConfiguration } from '../entities.configuration';

@Component({
  selector: 'app-entity-selector',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './entity-selector.html',
  styleUrl: './entity-selector.scss',
})
export class EntitySelector {
  controlName = input.required<string>();
  public readonly configuration = input.required<IEntityConfiguration>();

  private readonly formGroupDirective = inject(FormGroupDirective);
  private readonly destroyRef = inject(DestroyRef);

  public form?: FormGroup;
  public readonly options = signal<Array<{ label: string; value: string }>>([]);

  private sub?: Subscription;

  public get entityLabel() {
    return this.configuration().nameSingular;
  }

  constructor() {
    // Reage ao input configuration() e atualiza options
    effect(() => {
      const cfg = this.configuration(); // dispara quando o input é setado/alterado
      this.sub?.unsubscribe();
      this.sub = cfg.service
        .getIdsCodesAndLabels()
        .pipe(
          map(res => res.map(o => ({ label: `${o.code} - ${o.label}`, value: o.id })))
        )
        .subscribe(list => this.options.set(list));
    }, { allowSignalWrites: true });

    this.destroyRef.onDestroy(() => this.sub?.unsubscribe());
  }

  ngAfterViewInit(): void {
    this.form = this.formGroupDirective.form;
  }
}
