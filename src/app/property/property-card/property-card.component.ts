import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  Property:any = {
    "Id":1,
    "Type":"Villa",
    "Price":12000,
    "Name":"Krishna House"
  };

}
