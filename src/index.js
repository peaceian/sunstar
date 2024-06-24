import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import ContextProvider from './features/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <App />
    </ContextProvider>
    ,
);

