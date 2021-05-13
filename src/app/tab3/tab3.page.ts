import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  municipis: Array<any> = [];
  municipisFiltrats: Array<any> = [];
  loading = false;
  cercaComarca: String;
  cercaMunicipi: String;
  cercaDistricte: String;
  cercaSexe: String;

  constructor(private municipi:APIService) {}
  ngOnInit(){
    this.municipi.dadesMunicipis().subscribe(
    (data: any) => {
      this.loading = false

      for(let i = 0; i < data.length; i++){
        if(data[i].comarcadescripcio && data[i].comarcadescripcio!=undefined){

        let c = {
          'data' : data[i].data,
          'comarca': data[i].comarcadescripcio,
          'municipi': data[i].municipidescripcio,
          'districte': data[i].districtedescripcio,
          'sexe': data[i].sexedescripcio,
          'resultat': data[i].resultatcoviddescripcio,
          'numero': data[i].numcasos

        }

        this.municipis.push(c);
        this.municipisFiltrats.push(c);
      }
      }
   
    } );}

    filtrarComarca(){
  
      if (this.cercaComarca && this.cercaComarca.trim() !== '') {
        this.municipisFiltrats = this.municipis.filter(
          (element) => {
            return element.comarca.toLowerCase().indexOf(this.cercaComarca.toLowerCase()) > -1;
          }
        );
      }
  
    }

    filtrarMunicipi(){
  
      if (this.cercaMunicipi && this.cercaMunicipi.trim() !== '') {
        this.municipisFiltrats = this.municipis.filter(
          (element) => {
            return element.municipi.toLowerCase().indexOf(this.cercaMunicipi.toLowerCase()) > -1;
          }
        );
      }
  
    }

    filtrarDistricte(){
  
      if (this.cercaDistricte && this.cercaDistricte.trim() !== '') {
        this.municipisFiltrats = this.municipis.filter(
          (element) => {
            return element.districte.toLowerCase().indexOf(this.cercaDistricte.toLowerCase()) > -1;
          }
        );
      }
  
    }

    filtrarSexe(){
  
      if (this.cercaSexe && this.cercaSexe.trim() !== '') {
        this.municipisFiltrats = this.municipis.filter(
          (element) => {
            return element.sexe.toLowerCase().indexOf(this.cercaSexe.toLowerCase()) > -1;
          }
        );
      }
  
    }

}
