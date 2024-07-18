import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/domain/models/product.model';
import { ProductService } from 'src/app/infrastructure/service/product.service';


@Component({
  selector: 'app-home-producto',
  templateUrl: './home-producto.component.html',
  styleUrls: ['./home-producto.component.css']
})
export class HomeProductoComponent  implements OnInit  {

  productos: Product[] = [];
  selectedProduct: Product | null = null;

  codigo: number = 0;
  nombre: string = "";

  constructor(private productoService: ProductService, public router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  

  loadProducts(): void {
    this.productoService.getProductos(this.codigo, this.nombre).subscribe(pr => {
      console.log(pr);
      this.productos = pr;
    });
  }

  registrar(){

  }

}
