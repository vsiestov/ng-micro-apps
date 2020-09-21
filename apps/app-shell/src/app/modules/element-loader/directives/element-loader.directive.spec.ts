import { ElementLoaderDirective } from './element-loader.directive';
import { ElementRef } from '@angular/core';
import { ElementLoaderService } from '../services/element-loader.service';

describe('ElementLoaderDirective', () => {
  let directive: ElementLoaderDirective;
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('div');

    directive = new ElementLoaderDirective(
      new ElementRef(el),
      new ElementLoaderService()
    );
  });

  it('should check if exists', () => {
    expect(directive.checkIfExists('http://google.com')).toBeFalsy();
  });

  it('should check', () => {
    directive.register({
      name: 'tasks-element',
      url: 'http://google.com'
    });

    expect(directive.checkIfExists('http://google.com')).toBeTruthy();
  });

  describe('Testing loading', () => {
    let spyOnAddScript;
    let obj;
    let spyOnCreate;
    let spyOnAppendChild;

    beforeEach(() => {
      obj = {
        onload: () => {
        }
      };
      spyOnCreate = spyOn(document, 'createElement').and.callFake(() => {
        return obj;
      });

      spyOnAddScript = spyOn(document.head, 'appendChild');

      spyOnAppendChild = spyOn(el, 'appendChild');
    });

    it('should load a module', (done) => {
      directive.load({
        name: 'tasks-element',
        url: 'http://google.com'
      })
        .then((response) => {
          expect(directive.checkIfExists('http://google.com')).toBeTruthy();
          expect(spyOnAddScript).toHaveBeenCalled();
          done();
        })
        .catch((error) => {
          done(error);
        });

      obj.onload();
    });

    it('should init directive', (done) => {
      directive.maElementLoader = 'tasks-element';
      directive.url = 'http://google.com';

      directive.ngOnInit()
        .then(() => {
          expect(directive.checkIfExists('http://google.com')).toBeTruthy();
          expect(spyOnCreate).toHaveBeenCalledTimes(2);
          expect(spyOnAppendChild).toHaveBeenCalled();
          done();
        })
        .catch((error) => {
            done(error);
        });

      obj.onload();
    });
  });
});
