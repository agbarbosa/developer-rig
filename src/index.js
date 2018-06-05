import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { Rig } from './rig';
import { RigStore } from './core/rig-store';

export const store = new RigStore();

function wrap() {
  return (
    <Provider store={store.getReduxStore()}>
      <Rig />
    </Provider>
  );
}

ReactDOM.render(wrap(), document.getElementById('root'));
