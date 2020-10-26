import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { throwIfAlreadyLoaded } from '@app/core/utils';
import * as fromEpisodes from './+state/episodes.reducer';
import { EpisodesEffects } from './+state/episodes.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromEpisodes.EPISODES_FEATURE_KEY, fromEpisodes.episodesReducer, {
      initialState: fromEpisodes.initialState,
      metaReducers: fromEpisodes.metaReducers,
    }),
    EffectsModule.forFeature([EpisodesEffects]),
  ],
})
export class DataAccessEpisodesModule {
  constructor(@Optional() @SkipSelf() parentModule: DataAccessEpisodesModule) {
    throwIfAlreadyLoaded(parentModule, DataAccessEpisodesModule.name);
  }
}
