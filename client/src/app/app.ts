import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingOverlay } from '@commons/components/loading-overlay/loading-overlay';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoadingOverlay,
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}
