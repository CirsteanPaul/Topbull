import { RootState } from '..';

export const appIsScrolledSelector = (state: RootState): boolean => state.app.isScrolled;
export const appWidthSelector = (state: RootState): number => state.app.width;
