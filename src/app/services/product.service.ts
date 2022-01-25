import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = `${environment.serviceUrl}/product` 
  constructor(private http: HttpClient ) {}

  getProduct(): any{
    return this.http.get<any>(this.url)
  }

  getProductById(id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }

  //Add
  addProduct(product: any){
    return this.http.post<any>(this.url, product)
     .pipe(map((res)=>{
       return res;
     }));
  }

  //Update
  updateProduct(product: any,id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl,product)
    .pipe(map((res)=>{
      return res;
    }));
  }

  //Delete
  deleteProduct(id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.delete<any>(getUrl);
  }
}
