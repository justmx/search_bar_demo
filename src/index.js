/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/styles.scss';
import MainApp from './container/MainApp';
import {sites, categories} from './service/dataSource';

render(
  <MainApp categories={categories} sites={sites} />,
  document.getElementById('app')
);
