import { MatButtonModule, MatToolbarModule,
  MatIconModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule { }
