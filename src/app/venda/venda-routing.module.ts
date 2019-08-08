import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // canActivateChild: [AuthGuard],
    children: [
      // {
      //   path: 'create',
      //   loadChildren: './pages/task-save/task-save.module#TaskSavePageModule'
      // },
      // {
      //   path: 'edit/:id',
      //   loadChildren: './pages/task-save/task-save.module#TaskSavePageModule'
      // },
      {
        path: '',
        loadChildren: './pages/venda-list/venda-list.module#VendaListPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendaRoutingModule { }
