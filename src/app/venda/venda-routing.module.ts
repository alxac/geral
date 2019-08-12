import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'create',
        loadChildren: './pages/venda-nova/venda-nova.module#VendaNovaPageModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './pages/venda-nova/venda-nova.module#VendaNovaPageModule'
      },
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
