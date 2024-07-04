//grocery class
class Grocery {
  name: string;
  quantity: number;
  category: string;
  price: number;
  unit: string;

  constructor(name: string, quantity: number, category: string, price: number, unit: string) {
      this.name = name;
      this.quantity = quantity;
      this.category = category;
      this.price = price;
      this.unit = unit;
  }

  getName(): string {
      return this.name;
  }

  getQuantity(): number {
      return this.quantity;
  }

  getCategory(): string {
      return this.category;
  }

  getPrice(): number {
      return this.price;
  }

  getUnit(): string {
      return this.unit;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.scss'],
  standalone: true,
})
export class GroceriesComponent implements OnInit {

  //grocery list

  groceryList = [
    new Grocery("Milk", 2, "Dairy", 3.99, "gallon"),
    new Grocery("Bread", 1, "Bakery", 2.99, "loaf"),
    new Grocery("Eggs", 1, "Dairy", 1.99, "dozen"),
    new Grocery("Chicken", 2, "Meat", 5.99, "pound"),
    new Grocery("Apples", 6, "Produce", 3.99, "pieces"),
    new Grocery("Bananas", 6, "Produce", 2.99, "pieces"),
    new Grocery("Cereal - the Cap'n", 1, "Breakfast", 4.99, "box"),
    new Grocery("Pasta", 1, "Pantry", 1.99, "box"),
    new Grocery("Rice", 1, "Pantry", 2.99, "pound"),
    new Grocery("Black Beans", 1, "Pantry", 0.99, "can"),
    new Grocery("Vanilla Ice Cream", 1, "Frozen", 4.99, "pint")
  ];

  constructor() { }

  ngOnInit() { }

}
