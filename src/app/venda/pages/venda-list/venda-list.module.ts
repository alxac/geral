import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from 'src/app/tasks/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VendaListPage } from './venda-list.page';

const routes: Routes = [
  {
    path: '',
    component: VendaListPage
  }
];

@NgModule({
  imports: [SharedModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [VendaListPage]
})
export class VendaListPageModule { }
