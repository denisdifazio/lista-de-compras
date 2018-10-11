import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { Compra } from "./compra";
import { Observable } from "rxjs";
import { CompraService } from "./services/compra.service";

@Injectable()
export class ComprasResolver implements Resolve<Observable<Compra[]>> {
  private compraService: CompraService;

  constructor(compraService: CompraService) {
    this.compraService = compraService;
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Compra[]> {
    return this.compraService.getTodasCompras();
  }
}
