import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraitementService } from '../traitement.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  liste: any;
  constructor(private _router: Router, public traitement: TraitementService) {
    this.traitement.currentPage = true;

  }

  ngOnInit(): void {
    console.log(this.traitement.arbre)
    this.liste = [
      { prenom: "Aliou Diagne", nom: "Amar" },
      { prenom: "Gora", nom: "Amar" },
      { prenom: "Tala", nom: "Amar" },
    ]

  }

  rediriger(type:string,index_ligne:number) {
    this._router.navigate(['/ajouter/'+type+'/'+index_ligne]);
  }

}
