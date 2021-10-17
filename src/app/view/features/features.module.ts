import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    SubscribeFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ],exports:[
    SubscribeFormComponent
  ], providers: [DatePipe]
})
export class FeaturesModule { }
