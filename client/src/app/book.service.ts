import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url: string;
  constructor(private http: HttpClient) { }
  fetchBooks() {
    return this.http.get("http://localhost:3000/catalog");
  }
  getData(title) {
    return this.http.get(`http://localhost:3000/catalog/title/${title}`);
  }
  addToCart(id) {
    this.http.get(`http://localhost:3000/cart?id=${id}`);
  }
}
