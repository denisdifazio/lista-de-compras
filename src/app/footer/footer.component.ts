import { Component, Input } from "@angular/core";
import { Compra } from "../compra";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent {
  @Input()
  compras: Compra[];

  constructor() {}
}
