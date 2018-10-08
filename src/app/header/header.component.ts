import { Component, Output, EventEmitter } from "@angular/core";
import { Compra } from "../compra";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  compra: Compra = new Compra();

  @Output()
  add: EventEmitter<Compra> = new EventEmitter();

  constructor() {}

  addCompra() {
    this.add.emit(this.compra);
    this.compra = new Compra();
  }
}
