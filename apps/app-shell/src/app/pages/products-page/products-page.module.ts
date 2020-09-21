import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../../../../../libs/ui/src/lib/header/header.module';
import { ElementLoaderModule } from '../../modules/element-loader/element-loader.module';

@NgModule({
  declarations: [ProductsPageComponent, ProductPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsPageComponent
      },
      {
        path: ':id',
        component: ProductPageComponent
      }
    ]),
    ElementLoaderModule
  ]
})
export class ProductsPageModule {

}
