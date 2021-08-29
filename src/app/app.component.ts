import { Component } from '@angular/core';
import { TraitementService } from './traitement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public traitement: TraitementService) {
    this.traitement.currentPage = true
  }

  title = 'mbokk';
}
