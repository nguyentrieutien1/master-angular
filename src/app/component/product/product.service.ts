import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  getAllProduct = async () => {
    const result = await fetch(`https://fakestoreapi.com/products`);
    const data = await result.json();
    return await data;
  };
}
