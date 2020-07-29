import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[User] Login',
  ({ payload }: { payload: string }) => ({
    payload: payload.length > 0 ? payload : 'Empty',
  })
);
export const loginStart = createAction(
  '[User] Login start',
  props<{ payload: string }>()
);
export const logout = createAction(
  '[User] Logout',
  props<{ payload: string }>()
);
