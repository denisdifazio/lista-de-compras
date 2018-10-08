import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CompraListComponent } from "./compra-list/compra-list.component";
import { CompraListItemComponent } from "./compra-list/compra-list-item/compra-list-item.component";
import { FooterComponent } from "./footer/footer.component";
import { CompraService } from "./compra.service";
import { ApiService } from "./api.service";
import { AppRoutingModule } from "./app-routing.module";
import { ComprasComponent } from './compras/compras.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompraListComponent,
    CompraListItemComponent,
    FooterComponent,
    ComprasComponent,
    PageNotFoundComponent
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [CompraService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
