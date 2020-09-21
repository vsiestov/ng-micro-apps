import { Directive, Input, OnInit } from '@angular/core';
import { ElementLoaderService } from '../services/element-loader.service';
import { IElementLoaderRegister } from '../interfaces/element-loader.interfaces';

@Directive({
  selector: '[maElementPreload]'
})
export class ElementPreloadDirective implements OnInit {
  @Input() maElementPreload: string;
  @Input() url: string;

  constructor(
    private readonly elementLoaderService: ElementLoaderService
  ) {
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

  ngOnInit() {
    if (this.elementLoaderService.exists(this.url)) {
    }

    const script = document.createElement('script') as HTMLScriptElement;

    script.src = this.url;

    script.onload = () => {
      this.register({
        url: this.url,
        name: this.maElementPreload
      });
    };

    script.onerror = (error) => {
      console.log(error);
    };

    document.head.appendChild(script);
  }
}
