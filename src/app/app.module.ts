import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ImageConcatPipe } from './pipes/image-concat.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Reactive forms
import { ReactiveFormsModule } from '@angular/forms';
// Skeleton
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

// Modulo de peticiones http
import { HttpClientModule } from '@angular/common/http';
// Modulo de Angular Material
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { LoginComponent } from './components/login/login.component';
import { Table1Component } from './components/table1/table1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ImageConcatPipe,
    LoginComponent,
    Table1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
