import { Component, OnInit } from '@angular/core';
import { TraitementService } from '../traitement.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(public traitement: TraitementService) {
    this.traitement.currentPage = false
  }
  form_connexion: any = {}

  ngOnInit(): void {
  }
  connecter() {
    console.log(this.form_connexion)
    let formData = new FormData();
    formData.append('form_connexion', JSON.stringify(this.form_connexion));
    this.traitement.lancer_requete_post(
      "/authentification.php",
      formData,
      (data: any) => {
        if (data.status) {
          console.log("Connexion effectuée avec succes")
          this.traitement.utilisateur = data.personne
        } else {
          console.log("Login ou mot de pass incorrect")
        }
      },
      (data: any) => {
        console.log(data)
      }
    );
  }

}

