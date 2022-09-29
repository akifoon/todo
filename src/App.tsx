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