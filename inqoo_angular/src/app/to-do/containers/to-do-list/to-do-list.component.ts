import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../models/to-do-item';
import { ToDoListMock } from "../../mocks/to-do-list.mock";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  list: ToDoItem[] = ToDoListMock;

  constructor() { }

  ngOnInit(): void {

  }

}
