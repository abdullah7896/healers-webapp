import { Component } from '@angular/core';

@Component({
  selector: 'app-consumer-preferences',
  templateUrl: './consumer-preferences.component.html',
  styleUrls: ['./consumer-preferences.component.css']
})
export class ConsumerPreferencesComponent {
  gendersection= false;

  togglegendersection() {
    this.gendersection = !this.gendersection;
  }



}
