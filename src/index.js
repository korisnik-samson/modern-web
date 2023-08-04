import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import App from './App'
import './index.css'

//createRoot(document.getElementById('root')).render(<App />)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<React.StrictMode>
    <App />
</React.StrictMode>);