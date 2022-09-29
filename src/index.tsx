// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// serviceWorker.unregister();
import React from 'react';
import DashboardContent from './dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoImplemented from './TODO/TodoImplemented';
import SignInSide from './pages/login';
import Signup from './pages/Signup';
import Top from './pages/top';
import auth from './config/firebase';

const App:React.FC = () => {
  return (
  <Router>
    <Routes>
    <Route path="/" element={<Top />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<SignInSide />} />
    <Route path="/dashbord" element={<DashboardContent />} />
    
    <Route path ="/todo" element={<TodoImplemented />} />
    </Routes>
  </Router>
  
  )
};

export default App;