import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageComponent } from './components/tasks-page/tasks-page.component';
import { RouterModule } from '@angular/router';
import { ElementLoaderModule } from '../../modules/element-loader/element-loader.module';
import { HeaderModule } from '../../../../../../libs/ui/src/lib/header/header.module';

@NgModule({
  declarations: [TasksPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TasksPageComponent
      }
    ]),
    ElementLoaderModule,
    HeaderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksPageModule {
}
