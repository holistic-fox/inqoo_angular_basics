import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-to-do-list-item-creator',
  templateUrl: './to-do-list-item-creator.component.html',
  styleUrls: ['./to-do-list-item-creator.component.scss']
})
export class ToDoListItemCreatorComponent implements OnInit {

  itemCreator = new FormGroup({
    itemLabel: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onItemSubmit = () => console.log('onItemSubmit', this.itemCreator)

}
