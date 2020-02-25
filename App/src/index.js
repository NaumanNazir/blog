import React from 'react';
import { render } from "react-dom"
import AppRoutes from "./utils/routes"
import './assets/scss/main.scss';
import * as serviceWorker from './utils/serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretRight);


render(<AppRoutes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
