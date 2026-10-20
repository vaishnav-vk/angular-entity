import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './products/products/products';

@Component({
  imports: [RouterOutlet,Products],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-app');
}
