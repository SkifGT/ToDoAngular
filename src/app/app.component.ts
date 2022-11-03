import { Component, OnInit } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';
import { todoCreateAction, todoLoadStateAction } from './reducers/todo.actions';
import { TodoState } from './reducers/todo.reducers';
import { selectAllTodos } from './reducers/todo.selectors';
import { TodoSyncStorageService } from './service/todo-sync-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // public todoList$ = this._store.select(selectAllTodos);
  public name = '';

  constructor(
    private _store: Store<TodoState>,
    private todoSyncStorage: TodoSyncStorageService
  ) { }


  faCheck = faCheck;

  title = 'todo-app';

  ngOnInit(): void {
    this.todoSyncStorage.init();
    // this._store.dispatch(todoLoadStateAction())
  }

  onCreate(name: string) {
    this._store?.dispatch(todoCreateAction({ name }));
    this.name = ''
  }
}
