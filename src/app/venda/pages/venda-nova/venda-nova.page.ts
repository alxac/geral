import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendaService } from '../../services/venda.service';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

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
  }

  private createForm(): void {
    this.vendaForm = this.fb.group({
      vendedor: ['', [Validators.required, Validators.minLength(3)]],
      pagamento: [''],
      valor: [''],
      data: [''],
      pago: ['false'],
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
