import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Venda } from '../../models/venda.model';

@Component({
  selector: 'app-venda-item',
  templateUrl: './venda-item.component.html',
  styleUrls: ['./venda-item.component.scss'],
})
export class VendaItemComponent {

  @Input() venda: Venda;
  @Output() update = new EventEmitter<Venda>();
  @Output() delete = new EventEmitter<Venda>();

}