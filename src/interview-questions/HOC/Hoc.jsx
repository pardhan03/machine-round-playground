import React from 'react'

const Hoc = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    console.log(`Modifying ${WrappedComponent} with props`);
    return <WrappedComponent {...props}/>
  }
}

export default Hoc