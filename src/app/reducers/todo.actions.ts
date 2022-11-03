import { createAction, props } from '@ngrx/store';
import { TodoState } from './todo.reducers';


export const todoCreateAction = createAction(
  '[TODO] create todo item',
  props<{ name: string }>()
);

export const todoDeleteAction = createAction(
  '[TODO] delete todo item',
  props<{ id: number }>()
);

export const todoToggleAction = createAction(
  '[TODO] toggle todo item',
  props<{ id: number  }>()
);

export const todoEditAction = createAction(
  '[TODO] edit todo item',
  props<{ name: string, id: number  }>()
);

export const todoLoadStateAction = createAction(
  '[TODO] load todo state',
  props<{ state: TodoState}>()
);

