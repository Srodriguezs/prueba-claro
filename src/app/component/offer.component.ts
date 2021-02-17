import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styles: [
  ]
})
export class OfferComponent implements OnInit {

  constructor(public service:AppService) { }

  ngOnInit(): void {
    this.service.getDataJson().subscribe();
  }

  changeVersion(data){
    console.log(data);
    this.service.searchData(data);
  }

}
