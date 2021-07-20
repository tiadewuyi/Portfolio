import React from 'react'
import Home from './pages/Home'
import Work from './pages/Work'
import {Route} from 'react-router-dom'
import Contact from './pages/Contact'



function App(){


  return (
    <div> 
      <Route exact path='/' render = {() => (
        <Home/>
        )}/>

      <Route path='/work' render = {(history) => (
          <div>
            <Work  history = {() => (history.push('/'))}/>
          </div>
        )}/>
      <Route path='/contact' render = {(history) => (
          <div>
            <Contact  history = {() => (history.push('/'))}/>
          </div>
        )}/>

    </div>
      
  );
  }


export default App;
