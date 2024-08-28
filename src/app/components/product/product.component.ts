import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  allProduct : Product[] = [];
 constructor(private _ProductsService:ProductsService) {
 }
 getdata = () => {
  this._ProductsService.getProducts().subscribe({
    next:(res) => {
      this.allProduct = res.data
    },
    error:(error) => {
      console.log(error);
    },
    complete: () => {
       console.log("Done");
    }
  }
  )
}
ngOnInit(): void {
  this.getdata();
}
}
