import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainToolbar } from './main-toolbar/main-toolbar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MainToolbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('FleetManager.Client');
}
