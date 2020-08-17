import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  NavigationActionTiming,
} from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import { appReducer } from '@store/index';
import { userEfects } from '@store/user';
import { CustomSerializer } from '@store/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation,
    }),
    EffectsModule.forRoot([...userEfects]),
  ],
  exports: [
    StoreModule,
    HttpClientModule,
    StoreRouterConnectingModule,
    EffectsModule,
  ],
})
export class CoreModule {}
