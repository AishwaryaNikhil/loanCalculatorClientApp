import { IAppState } from '../app.state/app.state';
import {
  AppAction,
  AppActionNames,
  AppSucessAction,
  AppFailedAction
} from './app.actions';


// initial state
export const initialAppState: IAppState = {

};

// reducer
export function appModule(appState: IAppState = initialAppState, action: AppAction): IAppState {
  switch (action.type) {
    case AppActionNames.ACTION_SUCCESS:
      return actionSuccessReducer(appState, action as AppSucessAction);
    case AppActionNames.ACTION_FAILED:
      return actionFailReducer(appState, action as AppFailedAction);
    case AppActionNames.GET_LOAN_PLAN:
      return {
        ...appState       
      };
    default:
      return appState;
  }
}

function actionSuccessReducer(appState: IAppState, action: AppSucessAction): IAppState {
  switch (action.subType) {
    default:
      return appState;
  }
}

function actionFailReducer(appState: IAppState, action: AppFailedAction): IAppState {
  switch (action.subType) {
    default:
      return appState;
  }
}
