import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import App from './components/App'
import store from './redux/store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
