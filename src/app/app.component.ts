import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@store/index';
import { UserActions, UserSelectors } from '@store/user';
import { RouterSelectors } from '@store/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'folder-structure';
  id$!: Observable<string>;
  name$!: Observable<string>;
  router$!: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(UserActions.login({ payload: 'Carlos M.' }));

    this.id$ = this.store.pipe(select((state) => state['user'].profile.id)); //instead of this
    this.name$ = this.store.pipe(select(UserSelectors.getName)); //make this
    this.router$ = this.store.pipe(select(RouterSelectors.getRouteState));

    this.id$.subscribe((id) => console.log(id));
    this.name$.subscribe((name) => console.log(name));
    this.router$.subscribe((router) =>
      router ? console.log(router) : console.log('Loading router...')
    );
  }
}
