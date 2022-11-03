import { Component, OnInit } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todo-item-edit',
  templateUrl: './todo-item-edit.component.html',
  styleUrls: ['./todo-item-edit.component.scss']
})
export class TodoItemEditComponent implements OnInit {
  faCheck=faCheck;
  faTimes=faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
