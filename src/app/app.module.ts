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

// Modulo de Angular Material
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

// Header de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
// Cargamos los iconos de Angular Material
import { MatIconModule } from '@angular/material/icon';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
