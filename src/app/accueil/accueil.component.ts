import { Component, OnInit } from '@angular/core';
import { TraitementService } from '../traitement.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public traitement:TraitementService) { }

  ngOnInit(): void {
  }

  rediriger() {
    // this._router.navigate(['/ajouter', { type: 'pere' }]);
  }

}
