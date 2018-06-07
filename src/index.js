import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Rig } from './rig';
import { RigStore } from './core/rig-store';
import { wrap } from './util/react';

export const store = new RigStore();

ReactDOM.render(wrap(store, <Rig />), document.getElementById('root'));
