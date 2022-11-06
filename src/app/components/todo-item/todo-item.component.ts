import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {  faSquare, faCheckSquare, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/model/todo';
import { AppState } from 'src/app/reducers/app.state';
import { todoDeleteAction, todoToggleAction } from 'src/app/reducers/todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;

  faEdit = faEdit;
  faSquare = faSquare;
  faCheckSquare = faCheckSquare;
  faTrash = faTrash;
  displayMenu = false;

  constructor(
    private _store: Store<AppState>,
  ) { }

  onDelete(id: number) {
    this._store.dispatch(todoDeleteAction({ id }));
  }

  onToggle(id: number) {
    this._store.dispatch(todoToggleAction({ id }));
  }
  onMouseOver(){
    this.displayMenu = true;
  }

  onMouseLeave(){
    this.displayMenu = false;
  }

  ngOnInit(): void {
  }

}
