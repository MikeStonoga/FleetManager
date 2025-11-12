import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private readonly _loadingCount = signal(0);
  public readonly isLoading = signal(false);

  show() {
    this._loadingCount.update(count => count + 1);
    this.isLoading.set(true);
  }

  hide() {
    this._loadingCount.update(count => Math.max(count - 1, 0));
    if (this._loadingCount() === 0) {
      this.isLoading.set(false);
    }
  }

  reset() {
    this._loadingCount.set(0);
    this.isLoading.set(false);
  }
}
