import { Component, OnInit } from "@angular/core";
import { CompraService } from "../services/compra.service";
import { Compra } from "../compra";
import { Router } from "@angular/router";

@Component({
  selector: "app-compras",
  templateUrl: "./compras.component.html",
  styleUrls: ["./compras.component.css"]
})
export class ComprasComponent implements OnInit {
  compras: Compra[] = [];

  constructor(private compraService: CompraService, private router: Router) {
    this.compraService = compraService;
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

  onSair() {
    this.compraService.logOut();
    this.router.navigate(["login"]);
  }
}
