import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  dadesTotals(){
    const apiURL = 'https://analisi.transparenciacatalunya.cat/resource/623z-r97q.json';
    return this.http.get(apiURL);
  }

  dadesMunicipis(){
    const apiMunicipis = 'https://analisi.transparenciacatalunya.cat/resource/jj6z-iyrp.json';

    return this.http.get(apiMunicipis);
  }

  dadesMundials(){
    const apiMundials = 'https://api.covid19api.com/summary';

    return this.http.get(apiMundials);
  }
}


