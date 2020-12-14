import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, UI_FEATURE_KEY } from './ui.reducer';

export const selectUiState = createFeatureSelector<State>(UI_FEATURE_KEY);

export const getTheme = createSelector(selectUiState, (state: State) => state?.theme);
