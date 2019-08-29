import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Product;
  constructor() { }

  ngOnInit() {
  }

}
