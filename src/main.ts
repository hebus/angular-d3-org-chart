import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppBarComponent } from './bar.component';
import { AppOrgComponent } from './org.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AppBarComponent, AppOrgComponent],
  template: `
    <h1>Hello from {{name}}! + D3</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <app-org />
    <app-bar />
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
