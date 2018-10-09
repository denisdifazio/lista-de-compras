import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComprasComponent } from "./compras/compras.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ComprasResolver } from "./compras.resolver";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { CanActivateComprasGuard } from "./can-activate-compras.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: SignInComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "compras",
    component: ComprasComponent,
    canActivate: [CanActivateComprasGuard]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateComprasGuard, ComprasResolver]
})
export class AppRoutingModule {}
