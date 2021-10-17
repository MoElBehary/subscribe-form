import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterContainerComponent } from './master-container/master-container.component';
import { PagesModule } from '../pages/pages.module';
import { RouterGuard } from 'src/app/core/Guards/router.guard';



@NgModule({
  declarations: [
    MasterContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule,
    PagesModule,
  ],exports:[
    MasterContainerComponent,
  ], providers: [RouterGuard]
})
export class LayoutModule { }
