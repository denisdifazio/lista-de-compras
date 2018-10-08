import { Component } from "@angular/core";
import { CompraService } from "./compra.service";
import { Compra } from "./compra";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private compraService: CompraService;

  constructor(compraService: CompraService) {
    this.compraService = compraService;
  }

  onAddCompra(compra: Compra) {
    this.compraService.addCompra(compra);
  }

  onRemoveCompra(compra: Compra) {
    this.compraService.deleteCompraPorId(compra.id);
  }

  get compras() {
    return this.compraService.getTodasCompras();
  }

  onToggleCompraCompletada(compra: Compra) {
    this.compraService.toggleCompraCompletada(compra);
  }
}
