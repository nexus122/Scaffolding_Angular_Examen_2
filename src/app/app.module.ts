import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { SectionComponent } from './components/section/section.component';
import { CardComponent } from './components/card/card.component';
import { ImageConcatPipe } from './pipes/image-concat.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Skeleton
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

// Modulo de peticiones http
import { HttpClientModule } from '@angular/common/http';
// Modulo de Angular Material
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    SectionComponent,
    CardComponent,
    ImageConcatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
