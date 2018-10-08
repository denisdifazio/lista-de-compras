import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComprasComponent } from "./compras/compras.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ComprasResolver } from "./compras.resolver";

const routes: Routes = [
  {
    path: "",
    redirectTo: "compras",
    pathMatch: "full"
  },
  {
    path: "compras",
    component: ComprasComponent,
    resolve: {
      compras: ComprasResolver
    }
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ComprasResolver]
})
export class AppRoutingModule {}
