
import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'

comsole.log("hello world");

export default class App extends Component {
  
  render() {
    return (
      <div >
        <Navbar/>
        <News pageSize={5}/>
        
        
      </div>
    )
  }
}
