import { Component } from '@angular/core';
import { ToDoItem } from '../../models/to-do-item';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  list: ToDoItem[] = [];

  addToDoItem = (label: string) => this.list.push({
    label,
    isDone: false,
    index: this.list.length
  })

}
