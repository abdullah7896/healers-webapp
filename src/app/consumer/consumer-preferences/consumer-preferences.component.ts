import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { apiService } from 'src/app/Service/apiService';

export enum Gender {
  Male,
  Female
}
export enum WeightUnit {
  kg,
  lb
}
export enum HeightUnit {
  inches,
  cm
}

@Component({
  selector: 'app-consumer-preferences',
  templateUrl: './consumer-preferences.component.html',
  styleUrls: ['./consumer-preferences.component.css']
})
export class ConsumerPreferencesComponent {
  constructor(private router: Router, private httpClient: HttpClient, private apiService: apiService) { }

  public gender = Gender;
  public weightUnit = WeightUnit;
  public heightUnit = HeightUnit;
  public categories: any[] = [];
  public selectedCategoryIds: any[] = [];
  consumerPreference = { id:'',gender: 0, weight: 0, weightUnit: 0, height: 0, heightUnit: 0, birthDate: '', selectedCategoryIds: this.selectedCategoryIds };

  ngOnInit(): void {
    this.GetAllCategory();
  }
  gendersection = false;

  togglegendersection() {
    this.gendersection = !this.gendersection;

  }
  navigatetohome() {
    this.router.navigate(['']);
  }
  GetAllCategory() {
    this.apiService.GetAllCategory().subscribe(response => {
      this.categories = response.map((category: { id: any; name: any; parentId: any; displayName: any; }) => {
        return {
          id: category.id,
          name: category.name,
          parentId: category.parentId,
          displayName: category.displayName
        };
      });
      console.log('Categories:', this.categories);
    },
      error => {
        console.error('Login failed', error);
      });
  }
  toggleCategorySelection(category: any) {
    if (this.selectedCategoryIds.includes(category.id)) {
      this.selectedCategoryIds = this.selectedCategoryIds.filter((id) => id != category.id)

    } else
      this.selectedCategoryIds.push(category.id)
  }

  ConsumerPreference() {
    const userData = JSON.parse(localStorage.getItem('userData')??'');
    const userId = userData?.user?.id;
    if (userId) {
      this.consumerPreference.id = userId;
    } else {
      // Handle the case where userId is null, for example, by logging an error or showing a message to the user
      console.error('User ID not found in localStorage');
    }
    this.consumerPreference.weightUnit = this.consumerPreference.weightUnit ? 0 : 1;
    this.consumerPreference.heightUnit = this.consumerPreference.heightUnit ? 0 : 1;
    this.consumerPreference.selectedCategoryIds = this.selectedCategoryIds;
    this.apiService.ConsumerPreference(this.consumerPreference).subscribe(response => {
      console.log('successful', response);
      //this.router.navigate(['/dashboard']); // Example redirect to dashboard
    },
      error => {
        console.error('failed', error);
      });
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

  toggleBorder(gender: Gender) {
    if (gender === Gender.Male) {
      this.maleBorderStyle = this.maleBorderStyle ? '' : '1px solid #096DD9';
      this.femaleBorderStyle = '';
    
    
    } else {
      this.femaleBorderStyle = this.femaleBorderStyle ? '' : '1px solid #096DD9';
      this.maleBorderStyle = '';
    }
    this.consumerPreference.gender = gender
  }










}
