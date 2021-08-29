import { Component, OnInit } from '@angular/core';
import { TraitementService } from '../traitement.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public traitement:TraitementService) { }

  ngOnInit(): void {
  }

}
