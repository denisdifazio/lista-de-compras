import { Component, OnInit } from "@angular/core";
import { CompraService } from "../compra.service";
import { Compra } from "../compra";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-compras",
  templateUrl: "./compras.component.html",
  styleUrls: ["./compras.component.css"],
  providers: [CompraService]
})
export class ComprasComponent implements OnInit {
  private compraService: CompraService;
  private route: ActivatedRoute;

  compras: Compra[] = [];

  constructor(compraService: CompraService, route: ActivatedRoute) {
    this.compraService = compraService;
    this.route = route;
  }

  ngOnInit() {
    this.compraService.getTodasCompras().subscribe(compras => {
      this.compras = compras;
    });
  }

  onAddCompra(compra: Compra) {
    this.compraService.addCompra(compra);
  }

  onRemoveCompra(compra: Compra) {
    this.compraService.deleteCompraPorId(compra.id);
  }

  onToggleCompraCompletada(compra: Compra) {
    this.compraService.toggleCompraCompletada(compra);
  }

  onUpdateCompra(compra: Compra) {
    this.compraService.updateCompra(compra);
  }
}
