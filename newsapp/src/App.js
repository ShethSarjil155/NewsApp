import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

 const App =()=>{
 const pageSize=5;
  
  const [progress,setProgress] =useState(0)
 
 
  
  
    return (
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Routes>
        <Route exact path="/" element={<News  setProgress={setProgress}  pageSize={pageSize}  key="general" country="us" category="general"/>}/> 
        <Route exact path="/general" element={<News  setProgress={setProgress}  pageSize={pageSize}  key="general" country="us" category="general"/>}/> 
        <Route exact path="/business" element={<News  setProgress={setProgress}  pageSize={pageSize} key="business"  country="us" category="business"/>}/> 
        <Route exact path="/entertainment" element={<News  setProgress={setProgress}  pageSize={pageSize} key="entertainment"  country="us" category="entertainment"/>}/>  
        <Route exact path="/health" element={<News  setProgress={setProgress}  pageSize={pageSize}  key="health" country="us" category="health"/>}/> 
        <Route exact path="/science" element={<News  setProgress={setProgress}  pageSize={pageSize}  key="science" country="us" category="science"/>}/> 
        <Route exact path="/sports" element={<News  setProgress={setProgress}  pageSize={pageSize} key="sports"  country="us" category="sports"/>}/> 
        <Route exact path="/technology" element={<News  setProgress={setProgress}  pageSize={pageSize} key="technology"  country="us" category="technology"/>}/> 
        
        </Routes>
      </div>
    )
  }

  export default App;
