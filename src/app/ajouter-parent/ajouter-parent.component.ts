import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajouter-parent',
  templateUrl: './ajouter-parent.component.html',
  styleUrls: ['./ajouter-parent.component.css']
})
export class AjouterParentComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
      });

  }

}