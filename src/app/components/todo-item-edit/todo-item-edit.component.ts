import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/model/todo';


@Component({
  selector: 'app-todo-item-edit',
  templateUrl: './todo-item-edit.component.html',
  styleUrls: ['./todo-item-edit.component.scss']
})
export class TodoItemEditComponent implements OnInit {
  faCheck=faCheck;
  faTimes=faTimes;
  name = '';

  @Input()
  todo!: Todo;

  constructor() { }

  ngOnInit() {
    this.name = this.todo.name;
  }


  onCancel() {
    this.name = this.todo.name;
  }

}
