import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl = "http://localhost:8080/product";
  private httpClient = inject(HttpClient);

  getProducts(){
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  postProduct(data: Omit<Product,"id">):Observable<Product>{
    return this.httpClient.post<Product>(this.apiUrl, data);
  }
}
