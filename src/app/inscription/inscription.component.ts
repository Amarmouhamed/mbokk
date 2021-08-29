import { Component, OnInit } from '@angular/core';
import { TraitementService } from '../traitement.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(public traitement: TraitementService) {
    this.traitement.currentPage = false
  }
  form_inscription: any = {}

  ngOnInit(): void {
  }
  inscrire() {
    console.log(this.form_inscription)
    let formData = new FormData();
    formData.append('form_inscription', JSON.stringify(this.form_inscription));
    this.traitement.lancer_requete_post(
      "/inscription.php",
      formData,
      (data: any) => {
        console.log(data)
      },
      (data: any) => {
        console.log(data)
      }
    );
  }
}
