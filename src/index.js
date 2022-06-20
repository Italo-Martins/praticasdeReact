import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

//Era assim:
//ReactDOM.render(
//  <App/>,
//  document.getElementById('root')
//)

//Nova maneira:
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)

