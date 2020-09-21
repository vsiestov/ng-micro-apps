import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { ScrumPageComponent } from './pages/scrum-page/components/scrum-page/scrum-page.component';
import { ScrumPageModule } from './pages/scrum-page/scrum-page.module';
import { KanbanPageModule } from './pages/kanban-page/kanban-page.module';
import { KanbanPageComponent } from './pages/kanban-page/components/kanban-page/kanban-page.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ScrumPageModule,
    KanbanPageModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'boards/scrum',
          pathMatch: 'full'
        },
        {
          path: 'boards',
          children: [
            {
              path: 'scrum',
              component: ScrumPageComponent
            },
            {
              path: 'kanban',
              component: KanbanPageComponent
            }
          ]
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private readonly injector: Injector) {}

  ngDoBootstrap() {
    customElements.define(
      'boards-element',
      createCustomElement(AppComponent, { injector: this.injector })
    );
  }
}
