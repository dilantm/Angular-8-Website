import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DatePipe } from '@angular/common';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  componentTitle = 'Product List';
  rating = Array;
  isImage = true;
  showImage = false;
  searchText;
  products: Product[] = [
    {
    'productId': 1,
    'productName': 'Leaf Rake',
    'productCode': 'GDN-0011',
    'releaseDate': 'March 19, 2019',
    'description': 'Leaf rake with 48-inch wooden handle.',
    'price': 19.95,
    'PrePrice': 22.00,
    'starRating': 3.2,
    'imageUrl': 'http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg',
    'imageUrl2': 'http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg',
  },
  {
    'productId': 2,
    'productName': 'Garden Cart',
    'productCode': 'GDN-0023',
    'releaseDate': 'March 18, 2019',
    'description': '15 gallon capacity rolling garden cart',
    'price': 32.99,
    'PrePrice': 35.00,
    'starRating': 4.2,
    'imageUrl': 'http://bestjquery.com/tutorial/product-grid/demo6/images/img-7.jpg',
    'imageUrl2': 'http://bestjquery.com/tutorial/product-grid/demo6/images/img-8.jpg'
  },
  {
    'productId': 2,
    'productName': 'Garden Cart',
    'productCode': 'GDN-0023',
    'releaseDate': 'March 18, 2019',
    'description': '15 gallon capacity rolling garden cart',
    'price': 20.99,
    'PrePrice': 28.00,
    'starRating': 4.8,
    'imageUrl': 'http://bestjquery.com/tutorial/product-grid/demo73/images/img-3.jpg',
    'imageUrl2': 'http://bestjquery.com/tutorial/product-grid/demo73/images/img-4.jpg'
  },
  {
    'productId': 2,
    'productName': 'Garden Cart',
    'productCode': 'GDN-0023',
    'releaseDate': 'March 18, 2019',
    'description': '15 gallon capacity rolling garden cart',
    'price': 18.99,
    'PrePrice': 20.00,
    'starRating': 4.2,
    'imageUrl': 'http://bestjquery.com/tutorial/product-grid/demo58/images/img-5.jpg',
    'imageUrl2': 'http://bestjquery.com/tutorial/product-grid/demo58/images/img-6.jpg'
  }];
  constructor() { }

  ngOnInit() {
  }
  onShowImage() {
    this.showImage = !this.showImage;
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
  toggleDtaePipe(date) {

  }


}
