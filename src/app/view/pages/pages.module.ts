import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FeaturesModule } from '../features/features.module';



@NgModule({
  declarations: [
    SubscribeComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule
  ]
})
export class PagesModule { }
