import './App.css';
import React, { Component } from "react";
import FullName from './component/profile/FullName'
import ProfilePhoto from './component/profile/ProfilePhoto'
import Adresse from './component/profile/Adresse'
class App extends Component{  
  render() {
  return (
    <div className="App">
       <ProfilePhoto/>
       <FullName/>
       <Adresse/>
    </div>
  );
}}

export default App;
