import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { LoadingService } from '@commons/services/loading';

@Component({
  selector: 'app-loading-overlay',
  imports: [
    CommonModule
  ],
  templateUrl: './loading-overlay.html',
  styleUrl: './loading-overlay.scss',
})
export class LoadingOverlay {
  private readonly loadingService = inject(LoadingService);
  public readonly visible = computed(() => this.loadingService.isLoading());
}