import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';
import Team from './Pages/Team';
import Navbar from './Pages/Home/Navbar';
import ControlCenter from './Pages/ControlCenter/Control';
import IframeComponent from './Pages/ControlCenter/IframeComponent';
import Chatbox from './Pages/ProjectDev.jsx/Chatbox';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/OurTeams" element={<Team/>}  ></Route>
          <Route path="/ControlCenter" element={<ControlCenter/>}></Route>
          <Route path="/ProjectDev" element=
          {<Chatbox/>}>
          </Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
      </Router>
      {/* <IframeComponent/> */}
    </>
  )
}

{/* <iframe src="http://10.0.0.73/" width="650px" alt="Cam 1"/>   </iframe> */}

{/* <iframe src="http://10.0.0.73/" width="650px" alt="Cam 1" title="W3Schools Free Online Web Tutorials">
</iframe> */}

{/* <div style={{padding:'100px'}}>   
            <iframe 
            src={`http://10.0.0.73?timestamp=${new Date().getTime()}`}
           allowfullscreen="true" height="1240px" width="1240px" alt="Cam 1" title="W3Schools Free Online Web Tutorials">
            </iframe>  
          </div> */}