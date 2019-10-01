import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/product.model';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
  @Input() item: Product;
  @Output() ratingClicked : EventEmitter<any> = new EventEmitter();
  starWidth: number;
  constructor() { }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(): void {
    this.starWidth = this.item.starRating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit('The item was clicked' + this.item.starRating);
  }

}
