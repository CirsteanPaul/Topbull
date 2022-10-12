import { createReducer } from '@reduxjs/toolkit';
import { setAppIsScrolledAction, setAppWidthAction } from '../actions/app-actions';

interface State {
  isScrolled: boolean;
  width: number;
}
const initialState: State = {
  isScrolled: false,
  width: window.innerWidth,
};

const appReducer = createReducer(initialState, builder =>
  builder
    .addCase(setAppIsScrolledAction, (state, action) => ({ ...state, isScrolled: action.payload }))
    .addCase(setAppWidthAction, (state, action) => ({ ...state, width: action.payload })),
);
export default appReducer;
