import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../domain/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7293/api/Producto'; // Asegúrate de que la URL coincida con tu API

  constructor(private http: HttpClient) {}

  getProductos(id:number,nombre:string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/GetProducts?id=${id}&&nombre=${nombre}`);
  }

  getAllProductos(id:number,nombre:string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/GetAllProducts`);
  }

  addProductos(producto: Product): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/RegistrarProducto`, producto);
  }
}