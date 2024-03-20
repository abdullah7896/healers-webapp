import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-detailing',
  templateUrl: './profile-detailing.component.html',
  styleUrls: ['./profile-detailing.component.css']
})
export class ProfileDetailingComponent {
  firstsection= false;

  togglefirstsection() {
    this.firstsection = !this.firstsection;
  }
  secondsection= false;

  togglesecondsection() {
    this.secondsection = !this.secondsection;
  }
  previewImageUrl: string = '';

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.displayPreview(file);
  }

  displayPreview(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.previewImageUrl = reader.result as string;
    };
  }
}
