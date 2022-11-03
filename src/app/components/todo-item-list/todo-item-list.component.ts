import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { faPlus } from '@fortawesome/free-solid-svg-icons';


import { selectAllTodos } from '../../reducers/todo.selectors';
import { AppState } from '../../reducers/app.state'
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.scss']
})
export class TodoItemListComponent implements OnInit {

  public todoList$ = this._store.select(selectAllTodos);
  faPlus = faPlus;
  name = '';

  @Input()
  todoList: Todo[] = [];


  constructor(
    private _store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

}
