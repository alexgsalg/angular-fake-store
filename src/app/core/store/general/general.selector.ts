import { createSelector } from '@ngrx/store';
import { AppState } from '../app.store';
import { GeneralState } from './general.reducer';

export const selectCartSidebar = (state: AppState) => state.general;
export const selectUserDropdown = (state: AppState) => state.general;

export const selectGeneral = createSelector(
  selectCartSidebar,
  selectUserDropdown,
  (state: GeneralState) => state.cartSidebar
);
