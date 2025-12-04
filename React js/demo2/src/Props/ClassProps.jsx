import React, { Component } from 'react'
import "./props.css"

class ClassProps extends Component {

    constructor(props) {
        super(props);
        this.data = props
    }
    render() {

        return (
            <div className='col-md-4'>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="profile">
                        <img src={this.data.img} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.data.title}</h5>
                        <p className="card-text">{this.data.desc}</p>
                        <button className='btn btn-primary'>Click me</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default ClassProps