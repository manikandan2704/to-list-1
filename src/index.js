import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login/Login';
import Home from './Home/Home';
import Task from './Task-Page/Task'
import { stateContext } from './Context/stateContext';
import { useReducer } from 'react';
import { stateReducer } from './Context/reducer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {initalvalue} from "./Context/reducer"

function RoutesComponent() {
  const [state,dispatch] = useReducer(stateReducer,initalvalue);
  console.log("state",state);
  return (
    <stateContext.Provider value={{state,dispatch}}>                            
      <BrowserRouter>                                                       
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="task" element={<Task />}></Route>
          {/* {<Route path="*" element={<Navigate to ="/"/>}></Route> } */}
        </Routes>
      </BrowserRouter>
    </stateContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    < RoutesComponent />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
