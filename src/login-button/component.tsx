import * as React from 'react';
import './component.sass';

export class LoginButton extends React.Component<{}>{
  render() {
    const rigAuthUrl = 'https://id.twitch.tv/oauth2/authorize?client_id=rtwj27xsv591q1zcnqqfg7suduj4pq&redirect_uri=https://localhost.rig.twitch.tv:3000&response_type=token&scope=user:edit';
    return (
      <div className="login-button">
        <a href={rigAuthUrl}>
          <button
          >Log In</button>
        </a>
      </div>
    );
  }
}
