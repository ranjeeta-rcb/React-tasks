import React, { Component } from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'

export default class Navv extends Component {
  render() {
    return (
      <div>
        <center><h1>Class Based Components</h1></center>
        <nav> 
            <Box1></Box1>
            <Box2></Box2>
            <Box3></Box3>
        </nav>
      </div>
    )
  }
}
