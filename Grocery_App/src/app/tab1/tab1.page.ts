import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonItemSliding, IonLabel, IonItemOptions, IonItemOption } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Grocery } from '../grocery';
import { GroceryserviceService } from '../groceryservice.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonItem, IonItemSliding, IonLabel, IonItemOptions, IonItemOption,
    CommonModule],
})
export class Tab1Page {

  groceryList: Grocery[] = [];

  constructor(private groceryServiceService: GroceryserviceService) {
    this.groceryList = groceryServiceService.getGroceryList();
  }


  deleteItem(grocery: Grocery) {
    const index = this.groceryList.indexOf(grocery);
    if (index > -1) {
      this.groceryList.splice(index, 1);
    }
  }
}
