import React, { Component } from 'react'
import Header from './Layout/Comman/Header'

class LifeCycle extends Component {

    constructor(){
        super();
    }

    componentDidMount(){
        console.log("Mounting Phase");
    }
    componentDidUpdate(){
        console.log("This Update Phase");
    }
    componentWillUnmount(){
        
    }

  render() {
    return (
      <div>
        <Header />
        <h1 className='bg-secondary p-5 text-white m-5'>Hello This react Life Cycle Componenent</h1>
      </div>
    )
  }
}

export default LifeCycle