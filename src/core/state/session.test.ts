import * as sessionActions from '../actions/user-session';
import { sessionReducer, SessionState } from './session';
import { UserSession } from '../models/user-session';

describe('Session', () => {
  let state: SessionState;

  beforeEach(() => {
    state = sessionReducer(undefined, { type: 'INIT' } as any);
  });

  it('returns a correct inital state', () => {
    expect(state.sessionReceived).toBeFalsy();
    expect(state.userSession).toBeUndefined();
  });

  it('sets a correct user login', () => {
    const userSession: UserSession = {
      login: 'test',
      profileImageUrl: 'test.png',
      authToken: 'test',
    };
    state = sessionReducer(undefined, sessionActions.userLogin(userSession));
    expect(state.sessionReceived).toBeTruthy();
    expect(state.userSession).not.toBeUndefined();
    expect(state.userSession.login).toBe(userSession.login);
    expect(state.userSession.profileImageUrl).toBe(userSession.profileImageUrl);
    expect(state.userSession.authToken).toBe(userSession.authToken);
  });
});
