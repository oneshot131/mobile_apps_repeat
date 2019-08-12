import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  selectedItems = [];
  total = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};

    for (let obj of items) {
      if (selected [obj.id]) {
        selected[obj.id].count++; // If item already in basket increment by 1
      } else {
        selected[obj.id] = {...obj, count: 1}; // else add item to the basket with count of 1
      }
    }

    this.selectedItems = Object.keys(selected).map(key=> selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0 + 10); // Simple formula to caluclate total cost in basket (10 added for cost of Movie)
  }

}
