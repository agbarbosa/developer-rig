import * as React from 'react';
import { UserSession } from '../core/models/user-session';
import './component.sass';

export interface PublicProps {
  session: UserSession;
}
type Props = PublicProps;
export class UserDropdown extends React.Component<Props>{
  public render() {
    if (!this.props.session) {
      return null;
    }
    const { login, profileImageUrl } = this.props.session;
    return (
      <div className='user-dropdown'>
        <img alt='profile' className='user-dropdown__image' src={profileImageUrl} />
        <div className='user-dropdown__username'>{login}</div>
      </div>
    );
  }
}
