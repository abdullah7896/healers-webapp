import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumer-preferences',
  templateUrl: './consumer-preferences.component.html',
  styleUrls: ['./consumer-preferences.component.css']
})
export class ConsumerPreferencesComponent {
constructor(private router:Router){}
  gendersection = false;
  
  togglegendersection() {
    this.gendersection = !this.gendersection;

  }
  navigatetohome() {
    this.router.navigate(['']);
  }
  
  
  genderbutton = true;
  dateofbirth = false;
  physicalprofile = false;
  wellnessGoals = false;

  toggleSection(section: string) {
    switch (section) {
      case 'gender':
        this.genderbutton = true;
        this.dateofbirth = false;
        this.physicalprofile = false;
        this.wellnessGoals = false;

        break;
      case 'dateofbirth':
        this.dateofbirth = true;
        this.genderbutton = false;
        this.physicalprofile = false;
        this.wellnessGoals = false;

        break;
      case 'physicalprofile':
        this.physicalprofile = true;
        this.genderbutton = false;
        this.dateofbirth = false;
        this.wellnessGoals = false;
       break;
      case 'wellnessGoals':
        this.wellnessGoals = true;
        this.genderbutton = false;
        this.dateofbirth = false;
        this.physicalprofile = false;



        break;

      default:
        break;
    }

  }




  count: number = 0;
  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
 
  maleBorderStyle: string | undefined;
  femaleBorderStyle: string | undefined;
 
 
  toggleBorder(gender: string) {
    if (gender === 'male') {
      this.maleBorderStyle = this.maleBorderStyle ? '' : '1px solid  #096DD9';
      this.femaleBorderStyle = '';
    
    
    } else {
      this.femaleBorderStyle = this.femaleBorderStyle ? '' : '1px solid #096DD9';
      this.maleBorderStyle = '';
    }
  }
  
  








}
