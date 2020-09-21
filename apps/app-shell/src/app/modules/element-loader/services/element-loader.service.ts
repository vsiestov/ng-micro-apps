import { Injectable } from '@angular/core';
import { IElementLoaderRegister } from '../interfaces/element-loader.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ElementLoaderService {
  modules: Map<string, string> = new Map();

  constructor() {
  }

  register(params: IElementLoaderRegister) {
    this.modules.set(params.url, params.name);
  }

  exists(url: string): boolean {
    return this.modules.has(url);
  }
}
