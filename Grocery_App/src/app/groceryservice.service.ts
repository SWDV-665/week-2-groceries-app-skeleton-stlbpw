import { Injectable } from '@angular/core';
import { Grocery } from './grocery';

@Injectable({
  providedIn: 'root'
})
export class GroceryserviceService {

  constructor() { }

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

  getGroceryList() {
    return this.groceryList;
  }

  addGrocery(grocery: Grocery) {
    this.groceryList.push(grocery);
  }

  deleteGrocery(grocery: Grocery) {
    const index = this.groceryList.indexOf(grocery);
    if (index > -1) {
      this.groceryList.splice(index, 1);
    }
  }
}
