import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shoppong-list',
  templateUrl: './shoppong-list.component.html',
  styleUrls: ['./shoppong-list.component.css']
})
export class ShoppongListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apples',5),
    new Ingredient('oranges',10),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
