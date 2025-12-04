import React, { Component } from 'react'

class ClassState extends Component {

    constructor(){
        super();
        this.state = {
            name : "Yash Gondaliya",
            count : 0,
            img : true
        }
    }

  render() {
    return (
      <div>
        <h1>Hello Name : {this.state.name}</h1>
        <button className='btn btn-info'onClick={()=>this.setState({name:'surendra'})}>Change Name</button>
        <button className='btn btn-primary' onClick={()=>this.setState({name : "Nirav"})}>Change Name 2</button>

        <h1>Hello Count : {this.state.count}</h1>
        <button className='btn btn-warning' onClick={()=>this.setState({count : this.state.count + 1})}>Increment</button>
        <button className='btn btn-dark' onClick={()=>this.setState({count : this.state.count - 1})}>Decrement</button>
        <button className='btn btn-primary' onClick={()=>this.setState({count : 0})}>Zero</button>
      </div>
    )
  }
}

export default ClassState;