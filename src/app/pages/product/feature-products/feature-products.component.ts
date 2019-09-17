import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-feature-products',
  templateUrl: './feature-products.component.html',
  styleUrls: ['./feature-products.component.css']
})
export class FeatureProductsComponent implements OnInit {

  FeatureProducts: Product[] = [
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
    'productName': 'Garden Cart',
    'productId': 2,
    'productCode': 'GDN-0023',
    'releaseDate': 'March 18, 2019',
    'description': '15 gallon capacity rolling garden cart',
    'price': 0,
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

  filteredby:string;
  filteredProduct :Product[];
  _listfilter : string;

  get listfilter():string{
    return this._listfilter;
  }

  set listfilter(value : string) {
    this._listfilter = value;
    this.filteredProduct = this.listfilter ? this.performFilter(this.listfilter): this.FeatureProducts;
    // this.filteredby = this.listfilter.toLocaleLowerCase();
    // this.filteredProduct = this.FeatureProducts.filter((FeatureProducts:Product)=>
    // FeatureProducts.productName.toLocaleLowerCase().indexOf(this.filteredby)!==-1);

  }

  performFilter(filteredby:string):Product[]{
    filteredby = filteredby.toLocaleLowerCase();
    return this.FeatureProducts.filter((FeatureProducts:Product)=>FeatureProducts.productName.toLocaleLowerCase().indexOf(filteredby)!==-1)
  }


  constructor() { }

  ngOnInit() {
  }

}
