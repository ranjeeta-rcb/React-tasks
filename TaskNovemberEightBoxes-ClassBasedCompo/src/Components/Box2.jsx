import React, { Component } from 'react'

export default class Box2 extends Component {
  render() {
    return (
      <div className='box2'>
        <div className='inbox1'>
            <div className='innerBox1'>
                <div className='insideBox'>
                    <div className='insideBox1'></div>
                    <div className='insideBox2'></div>
                </div>
            </div>
            <div className='innerBox2'>
                            </div>
        </div>
        <div className='inbox2'>
            <div className='innerBox2-2'>
                <div className='insideBox2-1'></div>
            </div>
            <div className='innerBox2-3'>
                <div className='insideBox2-2'></div>
            </div>
        </div>
      </div>
    )
  }
}
