import { Component } from '@angular/core';
import { ProductListComponent } from './pages/product/product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hello';
  customDate = '1988-04-12';
  btnChangeDateFormat = true;
  values = '';
  constructor(public productList: ProductListComponent) { }

  public callMe(): void {
    this.productList.onShowImage();
  }

  changeDateFormat(): void {
    this.btnChangeDateFormat = !this.btnChangeDateFormat;
  }

  public get format(): string {
    return this.btnChangeDateFormat ? 'shortDate' : 'fullDate';
  }

  onKey(event: any) { // without type info
    this.values = event.target.value;
  }


}


