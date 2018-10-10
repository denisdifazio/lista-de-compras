import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { environment } from "../environments/environment";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faPen,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CompraListComponent } from "./compra-list/compra-list.component";
import { CompraListItemComponent } from "./compra-list/compra-list-item/compra-list-item.component";
import { FooterComponent } from "./footer/footer.component";
import { CompraService } from "./compra.service";
import { ApiService } from "./api.service";
import { AppRoutingModule } from "./app-routing.module";
import { ComprasComponent } from "./compras/compras.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { CompareValidatorsDirective } from "./compare-validators.directive";
import { AngularFireDatabaseModule } from "@angular/fire/database";

library.add(faTrash, faPen, faCircle, faCheckCircle);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompraListComponent,
    CompraListItemComponent,
    FooterComponent,
    ComprasComponent,
    PageNotFoundComponent,
    SignInComponent,
    SignUpComponent,
    CompareValidatorsDirective
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [CompraService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
