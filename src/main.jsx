
import { BrowserRouter } from "react-router-dom";

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
</BrowserRouter>,
)

// import React from 'react';
// import ReactDOM from 'react-dom/client'
// import './index.css';
// import App from './App.jsx'
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );