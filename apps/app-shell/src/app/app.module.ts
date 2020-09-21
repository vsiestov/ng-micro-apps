import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tasks'
      },
      {
        path: 'tasks',
        loadChildren: () => import('./pages/tasks-page/tasks-page.module').then((m) => m.TasksPageModule)
      },
      {
        path: 'boards',
        loadChildren: () => import('./pages/boards-page/boards-page.module').then((m) => m.BoardsPageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./pages/products-page/products-page.module').then((m) => m.ProductsPageModule)
      }
    ], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule {}
