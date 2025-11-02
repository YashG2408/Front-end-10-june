import React, { Component } from "react";
import Images from './Images'


class ClassState extends Component {
    constructor() {
        super();
        this.state = {
            name: "Yash Gondaliya",
            count: 0,
            isImage: true
        }
    }

    render() {
        return (
            <div>
                <h1>Hello this is Class data</h1>

                <h1>Hello Name : {this.state.name}</h1>
                <button onClick={() => this.setState({name: "Ayush purohit"})}>Chanege Name</button>
                <button onClick={() => this.setState({name: "Patel Meet"})}>Chanege Name</button>

                <h1>Hello Count : {this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1 })}>Increment</button>
                <button onClick={() => this.setState({count: this.state.count - 1 })}>Decrement</button>
                <button onClick={() => this.setState({count: 0 })}>Zero</button><br/><br></br>


                <button onClick={()=> this.setState({isImage : false})}>Hide</button>
                <button onClick={()=> this.setState({isImage : true})}>Show</button>

                <button onClick={()=> this.setState({isImage : !this.state.isImage})}>Toggle</button>

                {
                    (this.state.isImage)? <Images/> : false
                }







            </div>
        )
    }
}
export default ClassState;