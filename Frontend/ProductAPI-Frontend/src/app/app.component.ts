import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpService) { }

  title = 'ProductAPI-Frontend';
  async ngOnInit() {
    const products = await this.http.getProduct();
    console.log(products);
  }
  
  getProducts() {
    await this.http.getProduct() 
    };
  }
}
