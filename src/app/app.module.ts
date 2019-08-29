import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductComponent } from './pages/product/product.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FeatureProductsComponent } from './pages/product/feature-products/feature-products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { ItemComponent } from './pages/product/feature-products/item/item.component';
import { Form1Component } from './pages/forms/form1/form1.component';
import {FormsModule} from '@angular/forms';
const appRoutes: Routes = [
  { path: '/', component: HomeComponent },
  { path: '/product',      component: ProductComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductComponent,
    HeaderComponent,
    FeatureProductsComponent,
    FooterComponent,
    ProductListComponent,
    ItemComponent,
    Form1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
