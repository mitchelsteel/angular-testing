import 'zone.js/dist/zone';
import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p> {{ count() }}</p>
    <p>{{doubleCount()}} </p>
    
  `,
})
export class App {
  name = 'Angular';
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  ngOnInit() {
    setTimeout(() => {
      this.count.set(1);
    }, 3000);
  }
}

bootstrapApplication(App);
