
//For multiple-image image-upload.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  selectedFiles: File[] = [];
  previewUrls: (string | ArrayBuffer)[] = [];

  openFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
        this.selectedFiles.push(file);

        const reader = new FileReader();
        reader.onload = () => {
          this.previewUrls.push(reader.result || '');
        };

        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(index: number): void {
    this.selectedFiles.splice(index, 1);
    this.previewUrls.splice(index, 1);
  }

  onSubmit(): void {
    // Handle the upload logic for selected files
    
    if (this.selectedFiles.length > 0) {
      console.log('Uploading files:', this.selectedFiles);
      // Clear selected files and previews after upload

      this.selectedFiles = [];
      this.previewUrls = [];

    }
  }
}
