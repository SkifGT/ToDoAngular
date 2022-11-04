import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {  faSquare, faCheckSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/model/todo';
import { AppState } from 'src/app/reducers/app.state';
import { todoDeleteAction } from 'src/app/reducers/todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;




  faSquare = faSquare;
  faCheckSquare = faCheckSquare;
  faTrash = faTrash;

  constructor(
    private _store: Store<AppState>,
  ) { }

  onDelete(id: number) {
    this._store.dispatch(todoDeleteAction({ id }));
  }

  ngOnInit(): void {
  }

}
