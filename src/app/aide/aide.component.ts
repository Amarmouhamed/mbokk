import { Component, OnInit } from '@angular/core';
import { TraitementService } from '../traitement.service';

@Component({
  selector: 'app-aide',
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.css']
})
export class AideComponent implements OnInit {
  liste:any=["gvh","iu","poi"]
  constructor(public traitement:TraitementService) { }

  ngOnInit(): void {
  }

}
