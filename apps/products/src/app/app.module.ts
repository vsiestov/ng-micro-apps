import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { ProductPageComponent } from './components/product-page/product-page.component';

@NgModule({
  declarations: [AppComponent, ProductPageComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent, ProductPageComponent]
})
export class AppModule {
  constructor(
    private readonly injector: Injector
  ) {
  }

  ngDoBootstrap() {
    if (!customElements.get('products-element')) {
      customElements.define(
        'products-element',
        createCustomElement(AppComponent, { injector: this.injector })
      );
    }

    if (!customElements.get('product-element')) {
      customElements.define(
        'product-element',
        createCustomElement(ProductPageComponent, { injector: this.injector })
      );
    }
  }
}
