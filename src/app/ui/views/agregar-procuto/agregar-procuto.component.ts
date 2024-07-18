import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/domain/models/product.model';
import { ProductService } from 'src/app/infrastructure/service/product.service';

@Component({
  selector: 'app-agregar-procuto',
  templateUrl: './agregar-procuto.component.html',
  styleUrls: ['./agregar-procuto.component.css']
})
export class AgregarProcutoComponent implements OnInit {

  producto: Product | null = null;
  selectedProduct: Product | null = null;
  nombre: string = "";
  precio: number = 0.0;

  constructor(private productoService: ProductService, public router: Router) { }

  ngOnInit(): void {

  }

  saveTask(): void {
    const productoDto : Product = {
      id: 3,
      nombre: this.nombre,
      precio: this.precio,
      fechaCreacion: new Date()
    }
    this.productoService.addProductos(productoDto).subscribe(pr => {
      this.router.navigate(["/home"]);
      console.log(pr);
    });
  }

}
