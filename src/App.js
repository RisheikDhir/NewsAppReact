
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route path="/" element={<News key='general' pageSize={5} country='in' category='general'/>}/>
            <Route path="/business"  element={<News key='business' pageSize={5} country='in' category='business'/>}/>
            <Route path="/entertainment"  element={<News key='entertainment' pageSize={5} country='in' category='entertainment'/>} />
            <Route path="/general"element={<News key='general' pageSize={5} country='in' category='general'/>} />
            <Route path="/health"element={<News key='health' pageSize={5} country='in' category='health'/>} />
            <Route path="/science" element={<News key='science' pageSize={5} country='in' category='science'/>} />
            <Route path="/technology" element={<News key='technology' pageSize={5} country='in' category='technology'/>} />
            <Route path="/sports" element={<News key='sports' pageSize={5} country='in' category='sports'/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

// d5309e10ecdb4d79916eadf6d643ec94  API Key 