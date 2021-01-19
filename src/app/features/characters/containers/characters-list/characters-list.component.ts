import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Character } from '@app/shared/models';
import { CharactersActions, CharactersSelectors } from '@app/shared/data-access-characters';
import { LocationsActions } from '@app/shared/data-access-locations';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersListComponent implements OnInit {
  characters$: Observable<Character[]> = this.store.select(CharactersSelectors.getCharacters);
  loading$: Observable<boolean> = this.store.select(CharactersSelectors.getLoading);
  page$: Observable<number> = this.store.select(CharactersSelectors.getCurrentPage);
  pages$: Observable<number> = this.store.select(CharactersSelectors.getTotalPages);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CharactersActions.enterCharactersPage());
  }

  prefetchLocation(locationId: number): void {
    if (locationId) {
      this.store.dispatch(LocationsActions.hoverLocationOfCharacter(locationId));
    }
  }

  trackByFn(index: number, character: Character): number {
    return character.id;
  }
}
