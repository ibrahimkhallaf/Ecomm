import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  allProduct:Product[] = [];
  constructor(private _ProductsService:ProductsService) {}
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
