import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AideComponent } from './aide/aide.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';


const routes: Routes = [
  {
    path: "inscription", component: InscriptionComponent,

  },
  {
    path: "connexion", component: ConnexionComponent,
  },
  {
    path: "accueil", component: AideComponent,
  },
  {
    path: "aide", component: AideComponent,
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
