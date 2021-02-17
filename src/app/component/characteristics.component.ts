import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styles: [
  ]
})
export class CharacteristicsComponent implements OnInit {
  
  constructor(public service: AppService) { }

  ngOnInit(): void {
  }

}
