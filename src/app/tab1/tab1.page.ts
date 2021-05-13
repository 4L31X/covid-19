import { Component, OnInit } from '@angular/core';

import {APIService } from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public mon: any;
  
  constructor(private dades: APIService) {}

  ngOnInit() { 
    this.dades.dadesMundials().subscribe(
    (data: any) => {
    
    this.mon = data;
    console.log(this.mon)
    
    } );
    }

}
