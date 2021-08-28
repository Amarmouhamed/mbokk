import { Component, OnInit } from '@angular/core';
import { TraitementService } from '../traitement.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  form_inscription:any={};
  constructor(public traitement:TraitementService) { }

  ngOnInit(): void {
  }
  sInscrire(){
    console.log(this.form_inscription)
    let formData = new FormData();
    formData.append("inscription", "oui");
    formData.append("form_inscription", JSON.stringify(this.form_inscription));
    this.traitement.lancer_requete_post(formData,
      (data:any)=>{
        
      },
      (data:any)=>{
        
      })
  }

}
