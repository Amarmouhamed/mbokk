import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AideComponent } from './aide/aide.component';
import { AjouterParentComponent } from './ajouter-parent/ajouter-parent.component';
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
    path: "accueil", component: AideComponent,
  },
  {
    path: "aide", component: AideComponent,
  },
  {
    path: "plus-infos", component: PlusInfoComponent,
  },
  {
    path: "ajouter/:type/:index_ligne", component: AjouterParentComponent,
  },
  {
    path: "", component: AccueilComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
