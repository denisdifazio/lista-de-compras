import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Compra } from "../../compra";

@Component({
  selector: "app-compra-list-item",
  templateUrl: "./compra-list-item.component.html",
  styleUrls: ["./compra-list-item.component.css"]
})
export class CompraListItemComponent {
  editando: boolean = false;

  @Input()
  compra: Compra;

  @Output()
  remove: EventEmitter<Compra> = new EventEmitter();

  @Output()
  update: EventEmitter<Compra> = new EventEmitter();

  @Output()
  toggleCompletada: EventEmitter<Compra> = new EventEmitter();

  constructor() {}

  toggleCompraCompletada(compra: Compra) {
    this.toggleCompletada.emit(compra);
  }

  removeCompra(compra: Compra) {
    this.remove.emit(compra);
  }

  toggleEditar() {
    this.editando = !this.editando;

    if (!this.editando) {
      this.updateCompra(this.compra);
    }
  }

  pararEdicao() {
    this.editando = false;
  }

  updateCompra(compra: Compra) {
    this.update.emit(compra);
    this.pararEdicao();
  }
}
