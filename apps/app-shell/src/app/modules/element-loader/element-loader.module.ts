import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementLoaderDirective } from './directives/element-loader.directive';
import { ElementPreloadDirective } from './directives/element-preload.directive';

@NgModule({
  declarations: [ElementLoaderDirective, ElementPreloadDirective],
  exports: [
    ElementLoaderDirective,
    ElementPreloadDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ElementLoaderModule { }
