import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import App from './App';
import { TodoProvider } from './TodoContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoProvider>
        <App />
    </TodoProvider>
);
