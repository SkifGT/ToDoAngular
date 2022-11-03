import { Component, Input, OnInit } from '@angular/core';

import {  faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/model/todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  // @Input()
  // todoList: Todo[] = [];
  @Input()
  todo!: Todo;

  faSquare = faSquare;
  faCheckSquare = faCheckSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
