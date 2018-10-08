import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Compra } from "../../compra";

@Component({
  selector: "app-compra-list-item",
  templateUrl: "./compra-list-item.component.html",
  styleUrls: ["./compra-list-item.component.css"]
})
export class CompraListItemComponent {
  @Input()
  compra: Compra;

  @Output()
  remove: EventEmitter<Compra> = new EventEmitter();

  @Output()
  toggleCompletada: EventEmitter<Compra> = new EventEmitter();

  constructor() {}

  toggleCompraCompletada(compra: Compra) {
    this.toggleCompletada.emit(compra);
  }

  removeCompra(compra: Compra) {
    this.remove.emit(compra);
  }
}
