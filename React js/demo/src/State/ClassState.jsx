import React, { Component } from 'react'
import Image from './Image';

 class ClassState extends Component {

    constructor(){
        super();
        this.state = {
            name : "Yash Gondaliya",
            count : 0,
            isImage : true
        }
    }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Name : {this.state.name}</h1>
        <button className='btn btn-primary' onClick={()=>{this.setState({name : "Nirav Gujariya"})}}>Change Name</button>
        <button className='btn btn-secondary' onClick={()=>{this.setState({name : "Jay Vaghela"})}}>Change Name 2</button>
        <button className='btn btn-info' onClick={()=>{this.setState({name : "Surendra Parmar"})}}>Change Name 3</button>

        <h1>Count : {this.state.count}</h1>
        <button className='btn btn-primary'onClick={()=>(this.setState({count : this.state.count + 1 }))}>Increment</button>
        <button className='btn btn-info' onClick={()=>(this.setState({count : this.state.count - 1 }))}>Decrement</button>
        <button className='btn btn-success' onClick={()=>(this.setState({count : 0}))}>Zero</button>

        <br></br>
        <br/>
        <button className='btn btn-primary' onClick={()=>this.setState({isImage : false})}>Hide</button>
        <button className='btn btn-secondary' onClick={()=>this.setState({isImage : true})}>Show</button>
        <button className='btn btn-info' onClick={()=>this.setState({isImage : !this.state.isImage})}>Toggle</button>

        {
          (this.state.isImage)?<Image />:false
        }
      </div>

     
    )
  }
}

export default ClassState;