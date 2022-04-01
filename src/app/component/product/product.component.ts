import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  productsList: Array<any> = [];
  cartList: any[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  async ngOnInit() {
    this.productsList = await this.productService.getAllProduct();
    console.log(this.productsList);
  }
  handleOnclick(newItem: any) {
    console.log(newItem);
  }

  handleBuyProduct = async (product: number | any) => {
    this.cartService.addToCart(product);
  };
}
