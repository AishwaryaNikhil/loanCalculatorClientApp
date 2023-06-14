import { BaseSelector } from '../../shared/base.selector';
import { createFeatureSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { AppActionNames } from './app.actions';
import { IAppState } from './app.state';



export const appState = createFeatureSelector<IAppState>('AppModule');

@Injectable()
export class AppSelector extends BaseSelector {
    constructor(
        private store: Store<any>,
        private AppAction: Actions
    ) {
        super(AppAction, AppActionNames.ACTION_SUCCESS, AppActionNames.ACTION_FAILED);
    }
}