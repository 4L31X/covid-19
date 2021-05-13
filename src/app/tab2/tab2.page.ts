import { Component, OnInit } from '@angular/core';

import { APIService } from '../api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public totals: Array<any>;

  constructor(private dades: APIService) {}

  ngOnInit() { this.dades.dadesTotals().subscribe(
    (data: Array<any>) => {
    // recollim les dades i les guardem a la propietat totals
    this.totals = data;
    
    // llistem les dades a la cònsola per veure què hem rebut console.log(this.totals);
    } )
    }

}
