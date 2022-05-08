import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-to-do-list-item-creator',
  templateUrl: './to-do-list-item-creator.component.html',
  styleUrls: ['./to-do-list-item-creator.component.scss']
})
export class ToDoListItemCreatorComponent implements OnInit {

  @Output() onItemCreate = new EventEmitter<string>();

  ngOnInit() {

  }

  itemCreator = new FormGroup({
    itemLabel: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z\\s]*$')
    ])
  });

  onItemSubmit = () => {
    if(this.itemCreator.valid) {
      this.onItemCreate.emit(this.itemCreator.value.itemLabel);
      this.itemCreator.reset();
    }
  }

  hasRequiredError = (): boolean =>
    this.itemCreator?.controls['itemLabel'].errors?.hasOwnProperty('required')
      && this.itemCreator?.controls['itemLabel'].touched ? true : false;

  hasMinLengthError = (): boolean =>
    this.itemCreator?.controls['itemLabel'].errors?.hasOwnProperty('minlength') ? true : false;

  hasMinPatternError = (): boolean =>
    this.itemCreator?.controls['itemLabel'].errors?.hasOwnProperty('pattern') ? true : false;
}
