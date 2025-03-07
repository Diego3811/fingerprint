import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FingerprintscanerComponent } from './fingerprintscaner/fingerprintscaner.component'; // Asegúrate de tener esta importación

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FingerprintscanerComponent],
  template: `
    <h1>{{ title }}</h1>
    <router-outlet></router-outlet>
    <app-fingerprintscaner></app-fingerprintscaner>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fingerprint';
}