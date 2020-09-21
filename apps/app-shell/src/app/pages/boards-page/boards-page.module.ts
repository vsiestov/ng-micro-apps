import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsPageComponent } from './components/boards-page/boards-page.component';
import { RouterModule } from '@angular/router';
import { ElementLoaderModule } from '../../modules/element-loader/element-loader.module';
import { HeaderModule } from '../../../../../../libs/ui/src/lib/header/header.module';

@NgModule({
  declarations: [BoardsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'scrum',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: BoardsPageComponent
      }
    ]),
    ElementLoaderModule,
    HeaderModule
  ]
})
export class BoardsPageModule {}
