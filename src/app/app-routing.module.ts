import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PlusInfoComponent } from './plus-info/plus-info.component';


const routes: Routes = [
  {
    path: "inscription", component: InscriptionComponent,

  },
  {
    path: "connexion", component: ConnexionComponent,
  },
  {
    path: "plus-info", component: PlusInfoComponent,
  },
  {
    path: "", component: AccueilComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
