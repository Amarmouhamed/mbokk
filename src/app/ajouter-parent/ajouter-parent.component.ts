import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TraitementService } from '../traitement.service';

@Component({
  selector: 'app-ajouter-parent',
  templateUrl: './ajouter-parent.component.html',
  styleUrls: ['./ajouter-parent.component.css']
})
export class AjouterParentComponent implements OnInit {
  type:string="";
  index_ligne:number=-1;
  form_ajouter:any={}
  constructor(public route: Router,private _route: ActivatedRoute,public traitement:TraitementService) { }

  ngOnInit(): void {
    this.type=this._route.snapshot.params['type']
    this.index_ligne=this._route.snapshot.params['index_ligne']
    console.log("params: ",this._route.snapshot.params['type'])
  }
  ajouter(){
    console.log(this.form_ajouter)
    if (this.index_ligne==-1) {
      this.traitement.arbre.push([this.form_ajouter])
    } else if (this.index_ligne==-2) {
      this.traitement.arbre.unshift([this.form_ajouter])
    } else if (this.type=="frere") {
      this.traitement.arbre[this.index_ligne].push(this.form_ajouter)
    } else {
      this.traitement.arbre[this.index_ligne].unshift(this.form_ajouter)
    }
    
    this.route.navigate(['/'])
  }
}
