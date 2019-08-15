import { NavController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { Venda } from '../../models/venda.model';
import { VendaService } from '../../services/venda.service';

@Component({
  selector: 'app-venda-list',
  templateUrl: './venda-list.page.html',
  styleUrls: ['./venda-list.page.scss'],
})
export class VendaListPage implements OnInit {
  vendas$: Observable<Venda[]>;

  constructor(
    private overLay: OverlayService,
    private vendaService: VendaService,
    private navCrtl: NavController
  ) { }

  async ngOnInit(): Promise<void> {
    const loading = await this.overLay.loading();
    this.vendas$ = this.vendaService.getAll();
    this.vendas$.pipe(take(1)).subscribe( (v) => {loading.dismiss() });
  }

  onUpdate(venda: Venda): void {
    this.navCrtl.navigateForward(`/venda/edit/${venda.id}`);
  }

  async onDelete(venda: Venda): Promise<void> {
    await this.overLay.alert({
      message: `Quer deletar este item? ("${venda.id}")?`,
      buttons:[
        {
          text: "Sim",
          handler: async () => {
            await this.vendaService.delete(venda);
          }
        },
        "Não"
      ]
    })
  }

}
