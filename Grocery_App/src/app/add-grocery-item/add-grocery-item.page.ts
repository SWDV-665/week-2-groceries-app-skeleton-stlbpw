import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Grocery } from '../grocery';
import { GroceryserviceService } from '../groceryservice.service';

@Component({
  selector: 'app-add-grocery-item',
  templateUrl: './add-grocery-item.page.html',
  styleUrls: ['./add-grocery-item.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, CommonModule, FormsModule]
})
export class AddGroceryItemPage implements OnInit {

  name: string;
  quantity: number;
  category: string;
  price: number;
  unit: string;

  constructor(private groceryServiceService: GroceryserviceService, private router: Router) {
    this.name = "";
    this.quantity = 0;
    this.category = "";
    this.price = 0;
    this.unit = "";
  }

  ngOnInit() {
  }

  resetForm() {
    this.name = '';
    this.quantity = 0;
    this.category = '';
    this.price = 0;
    this.unit = '';
  }

  addGrocery() {
    const newGrocery = new Grocery(this.name, this.quantity, this.category, this.price, this.unit);
    if(this.name !== '' && this.quantity !== 0) {
      this.groceryServiceService.addGrocery(newGrocery);
      this.resetForm();
      this.router.navigate(['/tabs/tab1']);
    }
    else {
      alert('Please enter all the fields');
    }

  }

}
