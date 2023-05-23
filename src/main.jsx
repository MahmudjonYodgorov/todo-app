// import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { Provider as TodoProvider } from "./context/todoContext";

ReactDOM.createRoot(document.getElementById('root')).render(
   <TodoProvider>
       <Root  />
   </TodoProvider>
)
