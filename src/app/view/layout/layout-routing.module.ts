import { CanActivate } from '@angular/router';
import { SubscribeComponent } from '../pages/subscribe/subscribe.component';
import { Routes } from '@angular/router';
import { ConfirmationComponent } from '../pages/confirmation/confirmation.component';
import { RouterGuard } from 'src/app/core/Guards/router.guard';

export const LayoutRoutingModule: Routes = [
  { pathMatch: 'full', path: '', redirectTo: 'subscribe' },
  { path: 'subscribe', component: SubscribeComponent},
  { path: 'confirmation', component: ConfirmationComponent, canActivate: [RouterGuard]}
];
