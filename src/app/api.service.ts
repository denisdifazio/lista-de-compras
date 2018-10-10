import { Injectable } from "@angular/core";
import { Compra } from "./compra";
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private comprasAF: AngularFireList<Compra>;
  private compras: Observable<Compra[]>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {}

  init() {
    const userId = this.afAuth.auth.currentUser.uid;
    if (userId) {
      this.comprasAF = this.db.list<Compra>(`compras/${userId}`);
      this.compras = this.comprasAF
        .snapshotChanges()
        .pipe(
          map(changes =>
            changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
          )
        );
    }
  }

  public getTodasCompras(): Observable<Compra[]> {
    if (!this.comprasAF) return;

    return this.compras;
  }

  public createCompra(compra: Compra) {
    if (!this.comprasAF) return;

    this.comprasAF.push(compra);
  }

  public updateCompra(compra: Compra) {
    if (!this.comprasAF) return;

    this.comprasAF.update(compra.id, compra);
  }

  public deleteCompraPorId(compraId: string) {
    if (!this.comprasAF) return;

    this.comprasAF.remove(compraId);
  }
}
