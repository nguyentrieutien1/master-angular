import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
interface IinfoRegister {
  username?: string;
  phonenumber?: string;
  password?: string;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  name: string = '';
  checkoutForm: any = this.formBuilder.group({
    name: '',
    address: '',
  });
  @Input() public cartList: any[] = [];
  infoRegister: any = {};
  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.cartList = this.cartService.getCart();
  }

  handleDelelteProFromCart(id: any) {
    this.cartService.handleDelelteProFromCart(id);
    this.cartList = this.cartService.getCart();
  }
  handleChange(e: any) {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.infoRegister[name] = value;
    console.log(this.infoRegister);
  }
  handleSubMit() {
    console.log(this.infoRegister);
  }
  handleChangeName(name: string) {
    this.name = name;
  }
  onSubmit(): void {
    console.log(123);
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
  }
}
