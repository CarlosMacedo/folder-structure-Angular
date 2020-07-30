import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, UserActions, UserSelectors } from '@store/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'folder-structure-with-services';
  id$!: Observable<string>;
  name$!: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(UserActions.login({ payload: 'Carlos M.' }));

    this.id$ = this.store.pipe(select((state) => state['user'].profile.id)); //instead of this
    this.name$ = this.store.pipe(select(UserSelectors.getName)); //make this

    this.id$.subscribe((id) => console.log(id));
    this.name$.subscribe((name) => console.log(name));
  }
}
