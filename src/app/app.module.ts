import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CompraListComponent } from "./compra-list/compra-list.component";
import { CompraListItemComponent } from "./compra-list/compra-list-item/compra-list-item.component";
import { FooterComponent } from "./footer/footer.component";
import { CompraService } from "./compra.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompraListComponent,
    CompraListItemComponent,
    FooterComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [CompraService],
  bootstrap: [AppComponent]
})
export class AppModule {}
