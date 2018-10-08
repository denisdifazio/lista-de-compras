import { Injectable } from "@angular/core";
import { Compra } from "./compra";

@Injectable({
  providedIn: "root"
})
export class CompraService {
  ultimoId: number = 0;
  compras: Compra[] = [];

  constructor() {}

  addCompra(compra: Compra): CompraService {
    if (!compra.id) {
      compra.id = ++this.ultimoId;
    }
    this.compras.push(compra);
    return this;
  }

  deleteCompraPorId(id: number): CompraService {
    this.compras = this.compras.filter(todo => todo.id !== id);
    return this;
  }

  updateCompraPorId(id: number, valores: Object = {}): Compra {
    let compra = this.getCompraPorId(id);
    if (!compra) {
      return null;
    }
    Object.assign(compra, valores);
    return compra;
  }

  getTodasCompras(): Compra[] {
    return this.compras;
  }

  getCompraPorId(id: number): Compra {
    return this.compras.filter(todo => todo.id === id).pop();
  }

  toggleCompraCompletada(compra: Compra) {
    let novaCompra = this.updateCompraPorId(compra.id, {
      completada: !compra.completada
    });
    return novaCompra;
  }
}
