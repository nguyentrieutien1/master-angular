import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../product/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  paramId: any | undefined;
  product: any | undefined;
  constructor(
    private router: ActivatedRoute,
    private products: ProductService
  ) {}
  async ngOnInit() {
    this.paramId = Number(this.router.snapshot.paramMap.get('id'));
    this.products.getAllProduct().then((data: any) => {
      this.product = data.find((data: any) => data.id == this.paramId);
    });
  }
}
