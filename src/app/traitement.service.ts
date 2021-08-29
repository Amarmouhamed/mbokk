import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {
  host_connexion="http://192.168.1.9/genealogie_back";
  liste:any=[{nom:"gvh"},{nom:"iu"},{nom:"poi"}]
  constructor(public http:HttpClient) { }
  /*
    elle lance une reque post dont les infos sont dans un formdata
    et puis execute : 
        succes_callback en cas de succes
        erreur_callback en cas de succes
  */
  lancer_requete_post(page:string,formData:any,succes_callback:Function,erreur_callback:Function){
    this.http.post(this.host_connexion+page,formData)
    .subscribe((res:any) => {
         console.log("succes: ", res)
          succes_callback(res)
      }, (err:any) => {
        console.log("erreur: ",err)
        erreur_callback(err)
    });
  }
}
