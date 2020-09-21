import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ElementLoaderService } from '../services/element-loader.service';
import { IElementLoaderRegister } from '../interfaces/element-loader.interfaces';

@Directive({
  selector: '[maElementLoader]'
})
export class ElementLoaderDirective implements OnInit {
  @Input() maElementLoader: string;
  @Input() url: string;

  constructor(
    private readonly ref: ElementRef,
    private readonly elementLoaderService: ElementLoaderService
  ) {
  }

  async ngOnInit() {
    await this.load({
      url: this.url,
      name: this.maElementLoader
    });
  }

  checkIfExists(module: string) {
    return this.elementLoaderService.exists(module);
  }

  register(params: IElementLoaderRegister) {
    if (this.checkIfExists(params.url)) {
      return;
    }

    this.elementLoaderService.register(params);
  }

  createElement(params: IElementLoaderRegister) {
    (this.ref.nativeElement as HTMLElement)
      .appendChild(document.createElement(params.name));
  }

  load(params: IElementLoaderRegister) {
    if (this.checkIfExists(params.url)) {
      this.createElement(params);

      return Promise.resolve();
    }

    const script = document.createElement('script') as HTMLScriptElement;

    script.src = params.url;

    return new Promise((resolve, reject) => {
      script.onload = () => {
        resolve();
      };

      script.onerror = (error) => {
        reject(error);
      };

      document.head.appendChild(script);
    })
      .then(() => {
        this.register(params);
        this.createElement(params);
      });
  }
}
