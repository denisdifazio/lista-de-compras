import { Injectable } from "@angular/core";
import { Compra } from "./compra";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CompraService {
  private api: ApiService;

  constructor(api: ApiService) {
    this.api = api;
  }

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
}
