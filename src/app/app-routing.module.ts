import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableviewComponent } from './tableview/tableview.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'', redirectTo:'tableview', pathMatch:'full'},
  {path:'tableview',component:TableviewComponent},
  // {path:'listview', loadChildren: () =>import('./listviews/listviews-routing.module').then(m => m.ListviewsRoutingModule)},
  {path:'listview',component:ListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
