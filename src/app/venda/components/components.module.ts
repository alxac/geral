import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { VendaItemComponent } from './venda-item/venda-item.component';

@NgModule({
  declarations: [VendaItemComponent],
  imports: [SharedModule],
  exports: [VendaItemComponent]
})
export class ComponentsModule {}
