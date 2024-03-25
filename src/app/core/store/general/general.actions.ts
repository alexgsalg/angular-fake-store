import { createAction, props } from '@ngrx/store';

export const toggleCartSidebar = createAction(
  '[General] Toggle Cart Side',
  props<{ payload: boolean }>()
);

export const toggleUserDropdown = createAction(
  '[General] Toggle User Dropdown',
  props<{ payload: boolean }>()
);
