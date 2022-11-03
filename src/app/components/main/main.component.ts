import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { selectAllTodos } from '../../reducers/todo.selectors';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { TodoState } from 'src/app/reducers/todo.reducers';
import { AppState } from '../../reducers/app.state'
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public todoList$ = this._store.select(selectAllTodos);
  faPlus = faPlus;
  name = '';

  @Output()
  create = new EventEmitter<string>();


  constructor(
    private _store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }
  onCreate() {
    if (this.name) {
      this.create.emit(this.name);
      this.name = '';
    }
  }

}
