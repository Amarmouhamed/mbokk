import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraitementService } from '../traitement.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  liste:any;
  constructor(private _router: Router,public traitement:TraitementService) { }

  ngOnInit(): void {
    console.log(this.traitement.arbre)
    this.liste=[
          {prenom:"Aliou Diagne",nom:"Amar"},
            {prenom:"Gora",nom:"Amar"},
            {prenom:"Tala",nom:"Amar"},
        ]
    
  }

  rediriger(type:string) {
    this._router.navigate(['/ajouter/'+type]);
  }

}
