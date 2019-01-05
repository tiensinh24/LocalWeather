import { MatButtonModule, MatToolbarModule,
  MatIconModule, MatCardModule,
  MatInputModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
