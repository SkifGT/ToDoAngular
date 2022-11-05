import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import {CdkDragDrop, moveItemInArray, CdkDrag} from '@angular/cdk/drag-drop';
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
  todoList: Todo[] | null = [];


  constructor(
    private _store: Store<AppState>,
  ) { }

  ngOnChanges(){
    console.log(this.todoList$);
  }


  drop(event: CdkDragDrop<unknown>) {
    if (this.todoList && typeof this.todoList === 'object')
    moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
  }

  sortPredicate(index: number, item: CdkDrag<number>) {
    return (index + 1) % 2 === item.data % 2;
  }


  ngOnInit(): void {
  }

}
