import React from 'react'
import Hoc from './Hoc'
import './hello.css'
const Hello = ({text}) => {
  return (
    <div className='container'>
      <p>hello {text}</p>
    </div>
  )
}

const EnhancedHello = Hoc(Hello);
export default EnhancedHello;