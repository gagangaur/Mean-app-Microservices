import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  array;
  isAvailable: boolean = false;
  x = [];
  allBooks;
  constructor(private service: BookService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.fetchBooks().subscribe(data => {
      this.allBooks = data;
      console.log(data)
    })
  }
  addToCart(id) {
    console.log(id)
    this.service.addToCart(id);
  }
  getData() {
    this.isAvailable = true;
    this.service.getData(this.title).subscribe(data => {
      this.array = data;
    })
  }

}
