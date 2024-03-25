import { createReducer, on } from '@ngrx/store';
import { toggleCartSidebar, toggleUserDropdown } from './general.actions';

export interface GeneralState {
  cartSidebar: boolean;
  userDropdown: boolean;
}

export const initialState: GeneralState = {
  cartSidebar: false,
  userDropdown: false,
};

export const generalReducer = createReducer(
  initialState,
  on(toggleCartSidebar, (state, { payload }) => ({
    ...state,
    cartSidebar: payload,
  })),
  on(toggleUserDropdown, (state, { payload }) => ({
    ...state,
    userDropdown: payload,
  }))
);
