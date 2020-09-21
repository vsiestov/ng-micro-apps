import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ma-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPageComponent {

}
