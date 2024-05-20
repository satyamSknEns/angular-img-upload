import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { BrowserModule } from '@angular/platform-browser';  // Ensure BrowserModule is imported as well
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(FormsModule),  // Add FormsModule here
  ],
};
