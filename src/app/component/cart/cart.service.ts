import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  listCart: any[] = [];

  constructor() {}

  getCart() {
    return this.listCart;
  }
  addToCart(product: any) {
    this.listCart?.push({ ...product });
  }
  handleDelelteProFromCart(id: any) {
    const findIndex = this.listCart.findIndex((cart) => cart.id === id);
    this.listCart.splice(findIndex, 1);
  }
}
