import { Action } from '../models/actions';
import { UserSession } from '../models/user-session';

export const USER_LOGIN = 'core.session.USER_LOGIN';

interface UserLogin extends Action<typeof USER_LOGIN> {
  userSession?: UserSession;
}

export type All = (
  | UserLogin
);

export function userLogin(user: UserSession | null): UserLogin {
  return {
    type: USER_LOGIN,
    userSession: user,
  }
}
