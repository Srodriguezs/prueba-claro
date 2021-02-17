import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styles: [
  ]
})
export class PricesComponent implements OnInit {

  constructor(public service: AppService) { }

  ngOnInit(): void {
  }

}
