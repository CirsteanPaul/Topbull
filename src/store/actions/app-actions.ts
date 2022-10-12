import { createAction } from '@reduxjs/toolkit';
import { APP__SET_IS_SCROLL, APP__SET_WIDTH } from '../constants';

export const setAppIsScrolledAction = createAction<boolean>(APP__SET_IS_SCROLL);
export const setAppWidthAction = createAction<number>(APP__SET_WIDTH);
