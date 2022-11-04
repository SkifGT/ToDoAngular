import { createReducer, on } from '@ngrx/store';

import { Todo } from '../model/todo';

import {
  todoCreateAction,
  todoDeleteAction,
  todoToggleAction,
  todoEditAction,
  todoLoadStateAction
} from './todo.actions';

export interface TodoState {
  idIncrement: number;
  todoList: Todo[] ;
}

export const initialState: TodoState = {
  idIncrement: 1,
  todoList: []
};

export const todoReducer = createReducer(
  // Supply the initial state
  initialState,
  // Add the new todo to the todos array
  on(todoCreateAction, (state, { name }) => ({
    ...state,
    idIncrement: state.idIncrement + 1,
    todoList: [
      ...state.todoList,
      { id: state.idIncrement,
        name: name,
        completed: false
      }],
  })),
  // Toggle complited todo in the todos list
  on(todoToggleAction, (state, { id }) => ({
    ...state,
    todoList: state.todoList.map((todo) => todo.id === id ? {
    ...todo,
    completed: !todo.completed
    } : todo)
    })
  ),
// Edit todo-item in the todos list
  on(todoEditAction, (state, { name, id }) => ({
    ...state,
    todoList: state.todoList.map(todo => todo.id === id ? {
      ...todo,
      name: name
    } : todo)
    })
  ),
// Delete todo-item in the todos list
  on(todoDeleteAction, (state, { id }) => ({
    ...state,
    todoList: state.todoList.filter(todo => todo.id !== id)
    })
  ),
// Load todo list from local storage
  on(todoLoadStateAction, (state) => ({
    ...state
    })
  ),
);
