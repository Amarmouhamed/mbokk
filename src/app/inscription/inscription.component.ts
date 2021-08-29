import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraitementService } from '../traitement.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  form_inscription:any={}
  constructor(public traitement:TraitementService,public route:Router) { }

  ngOnInit(): void {
  }
  inscrire(){
    console.log(this.form_inscription)
    let formData = new FormData();
    formData.append('form_inscription',JSON.stringify(this.form_inscription));
    this.traitement.lancer_requete_post(
      "/inscription.php",
        formData,
        (data:any)=>{
          // this.traitement.utilisateur=data.personne
          this.route.navigate(['/connexion'])
        },
        (data:any)=>{
        }
    );
  }
}
