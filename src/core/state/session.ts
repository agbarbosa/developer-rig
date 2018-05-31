import { UserSession } from '../models/user-session';
import * as sessionActions from '../actions/user-session';
export interface SessionState {
  sessionReceived: boolean;
  userSession?: UserSession;
}

export const getInitialState = (): SessionState => ({
  sessionReceived: false,
});

export function sessionReducer(state = getInitialState(), action: sessionActions.All): SessionState {
  switch (action.type) {
    case sessionActions.USER_LOGIN:
      return {
        ...state,
        sessionReceived: true,
        userSession: action.userSession,
      };
    default:
      return state;
  }
}
