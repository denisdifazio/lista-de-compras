import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Compra } from "../compra";

@Component({
  selector: "app-compra-list",
  templateUrl: "./compra-list.component.html",
  styleUrls: ["./compra-list.component.css"]
})
export class CompraListComponent {
  @Input()
  compras: Compra[];

  @Output()
  remove: EventEmitter<Compra> = new EventEmitter();

  @Output()
  update: EventEmitter<Compra> = new EventEmitter();

  @Output()
  toggleCompletada: EventEmitter<Compra> = new EventEmitter();

  constructor() {}

  onToggleTodoCompletada(compra: Compra) {
    this.toggleCompletada.emit(compra);
  }

  onRemoveCompra(compra: Compra) {
    this.remove.emit(compra);
  }

  onUpdateCompra(compra: Compra) {
    this.update.emit(compra);
  }
}
