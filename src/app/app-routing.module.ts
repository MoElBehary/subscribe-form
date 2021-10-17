import { ViewComponent } from './view/view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterContainerComponent } from './view/layout/master-container/master-container.component';
import { LayoutRoutingModule } from './view/layout/layout-routing.module'
const routes: Routes = [
  { pathMatch: 'full', path: '', redirectTo: 'subscribe' },
  {
    path: '',
    component: ViewComponent,
    children:
      [
        { path: '', component: MasterContainerComponent, children: [...LayoutRoutingModule], }
      ]
  },
  {path: '**', redirectTo:'' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
