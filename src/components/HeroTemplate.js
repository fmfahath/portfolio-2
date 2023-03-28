import React, { Component } from 'react'
import './heroTemplate.css'

class HeroTemplate extends Component{
  render(){
    return (
        <div className='hero-template'>
            <div className='hero-template-content'>
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
            </div>
        </div>
      )
  }
}

export default HeroTemplate