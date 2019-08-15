import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendaService } from '../../services/venda.service';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { take } from '../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-venda-nova',
  templateUrl: './venda-nova.page.html',
  styleUrls: ['./venda-nova.page.scss'],
})
export class VendaNovaPage implements OnInit {

  vendaForm: FormGroup;
  pageTitle = '...';
  vendaId: string = undefined;
  
  constructor(
    private fb: FormBuilder,
    private vendaService: VendaService,
    private overlayService: OverlayService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.init();
  }

  init(): void {
    const vendaId = this.route.snapshot.paramMap.get('id');
    if ( !vendaId ) {
      this.pageTitle = "Nova venda";
      return;      
    }
    this.vendaId = vendaId;
    this.pageTitle = "Atualizando";
    this.vendaService.get(vendaId)
    .pipe( take(1) )
    .subscribe( ({ vendedor, valor, ncontrole, id, pago, pagamento, data }) => {
      this.vendaForm.get('vendedor').setValue(vendedor);
      this.vendaForm.get('valor').setValue(valor);
      this.vendaForm.get('ncontrole').setValue(ncontrole);
      this.vendaForm.get('pagamento').setValue(pagamento);
      this.vendaForm.get('data').setValue(data);
      this.vendaForm.get('pago').setValue(pago);
      // this.vendaForm.get('id').setValue(id);
    });
  }

  private createForm(): void {
    this.vendaForm = this.fb.group({
      vendedor: ['', [Validators.required, Validators.minLength(3)]],
      pagamento: [''],
      valor: [''],
      data: [''],
      pago: [''],
      ncontrole: ['']
    });
  }

  async onSubmit():Promise<void> {

    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const task = !this.vendaId
        ? await this.vendaService.create(this.vendaForm.value)
        : await this.vendaService.update({
            id: this.vendaId,
            ...this.vendaForm.value
          });
      this.navCtrl.navigateBack('/venda');
    } catch (error) {
      await this.overlayService.toast({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }

  }

}
