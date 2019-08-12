import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AuthService } from 'src/app/core/services/auth.service';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { Venda } from '../models/venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService extends Firestore<Venda> {
  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
   }

   private init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        this.setCollection(`/users/${user.uid}/venda`, ref =>
          ref.orderBy('vendedor', 'asc')
        );
        return;
      }
      this.setCollection(null);
    });
  }
}
