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
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
