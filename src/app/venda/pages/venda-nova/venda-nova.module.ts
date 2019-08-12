import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { VendaNovaPage } from './venda-nova.page';

const routes: Routes = [
  {
    path: '',
    component: VendaNovaPage
  }
];

@NgModule({
  imports: [SharedModule,     RouterModule.forChild(routes)
  ],
  declarations: [VendaNovaPage]
})
export class VendaNovaPageModule {}

export class TaskSavePageModule {}