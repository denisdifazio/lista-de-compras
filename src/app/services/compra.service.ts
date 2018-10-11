import { Injectable } from "@angular/core";
import { Compra } from "../compra";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class CompraService {
  constructor(private api: ApiService, private auth: AuthService) {}

  addCompra(compra: Compra) {
    this.api.createCompra(compra);
  }

  deleteCompraPorId(id: string) {
    this.api.deleteCompraPorId(id);
  }

  updateCompra(compra: Compra) {
    this.api.updateCompra(compra);
  }

  getTodasCompras(): Observable<Compra[]> {
    return this.api.getTodasCompras();
  }

  toggleCompraCompletada(compra: Compra) {
    compra.completada = !compra.completada;

    this.api.updateCompra(compra);
  }

  logOut() {
    this.auth.logOut();
  }
}
