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
    this.compraService.addCompra(compra).subscribe(compra => {
      this.compras.push(compra);
    });
  }

  onRemoveCompra(compra: Compra) {
    this.compraService.deleteCompraPorId(compra.id).subscribe(_ => {
      this.compras = this.compras.filter(t => t.id !== compra.id);
    });
  }

  onToggleCompraCompletada(compra: Compra) {
    this.compraService.toggleCompraCompletada(compra).subscribe(novaCompra => {
      compra = novaCompra;
    });
  }
}
