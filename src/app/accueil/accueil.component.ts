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
    this.recevoir_generation(1)
  }

  rediriger(type:string,index_ligne:number) {
    this._router.navigate(['/ajouter/'+type+'/'+index_ligne]);
  }
  recevoir_generation(id_sommet:number){
    let formData = new FormData();
    formData.append('idpersonne',""+id_sommet);
    this.traitement.lancer_requete_post(
      "/tableau.php",
        formData,
        (data:any)=>{
          if (data.status) {
            console.log("Génération recu avec succes")
            this.traitement.arbre.push(data.une_generation)
          } else {
            console.log("Erreur de reception de la génération")
          }
        },
        (data:any)=>{
          console.log(data)
        }
    );
  }

}
