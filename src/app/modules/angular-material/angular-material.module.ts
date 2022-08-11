import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Header de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
// Cargamos los iconos de Angular Material
import { MatIconModule } from '@angular/material/icon';
// Cargamos los botones de Angular Material
import { MatButtonModule } from '@angular/material/button';
// Cargamos las cards
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class AngularMaterialModule {}
