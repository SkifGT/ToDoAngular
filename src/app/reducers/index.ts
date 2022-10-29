import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface Todos {
  
}

export const reducers: ActionReducerMap<Todos> = {

};


export const metaReducers: MetaReducer<Todos>[] = !environment.production ? [] : [];
