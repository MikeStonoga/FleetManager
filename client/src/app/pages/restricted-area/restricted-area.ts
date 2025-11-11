import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { MainToolbar } from "app/main-toolbar/main-toolbar";

@Component({
  selector: 'app-restricted-area',
  imports: [MainToolbar, RouterOutlet],
  templateUrl: './restricted-area.html',
  styleUrl: './restricted-area.scss',
})
export class RestrictedArea {

}
