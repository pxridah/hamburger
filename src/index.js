import React from 'react';
import ReactDOM from 'react-dom/client';

import  './index.css'
import App from './App'

// 设置移动端适配
// 视口的总宽度 750rem
const viewWidth = 750
document.documentElement.style.fontSize = 100 / viewWidth + 'vw'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


