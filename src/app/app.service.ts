import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
public data:Array<any> =[];
public version: Version  =new Version();



  constructor(private http: HttpClient) { }

  // Función para obtener información del archivo 
  getDataJson(): Observable<any>{

    return this.http.get<Array<any>>('./assets/ofertas.json').pipe(map(resp=>{
      this.data = resp;
      return resp;
    }));
  }


  // Función para buscar en la data por idd
  searchData(id: string):  Array<any>{
   const data  = this.data.filter((o)=>o.id ==id );
   
   this.version = (data.length==0)?  new Version():data[0].versions[0];
   return data;
  }
}

// clase para iniciar la variable que contiene toda la información
export class Version {
  id: string ='N/A';
  name: string ='N/A';
  characteristics: Array<any> = [];
  productOfferingPrices: Array<any> =[];

}
