import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { TodoState } from '../reducers/todo.reducers';
import { selectTodos, selectAllTodos } from '../reducers/todo.selectors';
import { todoLoadStateAction } from '../reducers/todo.actions';


export const TODO_LOCALSTORAGE_KEY = 'todo';

@Injectable({
  providedIn: 'root'
})

export class TodoSyncStorageService {
  private isInit = false;

  constructor(private store$: Store<TodoState>) { }

  init() {
    if (this.isInit) {
      return;
    }

    this.isInit = true;
    this.loadFromStorage();

    this.store$.pipe(
      // select(selectTodos),
      filter(state => !!state)
    ).subscribe(state => {
      localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify(state));
    });

    window.addEventListener('storage', () => this.loadFromStorage());
  }

  private loadFromStorage() {
    const storageState = localStorage.getItem(TODO_LOCALSTORAGE_KEY);
    if (storageState) {
      this.store$.dispatch(todoLoadStateAction({
        state: JSON.parse(storageState)
      }));
    }
  }
}
