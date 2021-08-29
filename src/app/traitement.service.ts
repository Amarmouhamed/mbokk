import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {
  currentPage = true;
  host = "localhost/backen_mbokk";
  constructor(public http: HttpClient) { }
  /*
    elle lance une reque post dont les infos sont dans un formdata
    et puis execute : 
        succes_callback en cas de succes
        erreur_callback en cas de succes
  */
  lancer_requete_post(formData: any, succes_callback: Function, erreur_callback: Function) {
    this.http.post(this.host, formData)
      .subscribe((res: any) => {
        console.log("succes: ", res)
        succes_callback(res)
      }, (err: any) => {
        console.log("erreur: ", err)
        erreur_callback(err)
      });
  }
}
