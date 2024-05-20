import { Routes } from '@angular/router';
import { ImageUploadComponent } from './image-upload/image-upload.component';

export const routes: Routes = [
  { path: '', redirectTo: 'image-upload', pathMatch: 'full' },
  { path: 'image-upload', component: ImageUploadComponent },
];
