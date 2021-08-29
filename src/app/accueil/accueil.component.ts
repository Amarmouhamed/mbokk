import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraitementService } from '../traitement.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private _router: Router, public traitement: TraitementService) {
    this.traitement.currentPage = true;
  }

  ngOnInit(): void {
  }

  rediriger() {
    this._router.navigate(['/ajouter', { type: 'pere' }]);
  }

}
