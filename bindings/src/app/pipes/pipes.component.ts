import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

 public firstName = 'Ganesh';
 public lastName = 'Kumar';
 public amount= 1.222222;
 public productInfo= {
   id: 1045,
   quantity: 1500,
   name: 'Television',
   brand: 'sony show room',
   price: 2000,
   purchasedDate: '6/4/2017',
   discount: 0.1

 }

 public productList= ['Laptop', 'Television', 'Refrigerator', 'Washing Machine', 'Mobile phone'];

  constructor() { }

  ngOnInit() {
  }

}
