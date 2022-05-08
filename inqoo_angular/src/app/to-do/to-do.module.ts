import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoPageComponent } from './pages/to-do-page/to-do-page.component';
import { ToDoListComponent } from './containers/to-do-list/to-do-list.component';
import { ToDoListItemComponent } from './components/to-do-list-item/to-do-list-item.component';



@NgModule({
  declarations: [
    ToDoPageComponent,
    ToDoListComponent,
    ToDoListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToDoModule { }
