import React, { Component } from 'react'


class Demoprops extends Component {

    constructor (props){
        super(props)
        this.data = props
    }

  render() {
    return (
      <div className='col-md-4 mt-5'>
            <div className="card" style={{width: '18rem'}}>
  <img src={this.data.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{this.data.name}</h5>
    <p className="card-text">{this.data.desc.slice(0,150)}</p>
    <button className='btn btn-success'>Gets Started</button>
    
  </div>
</div>

      </div>
    )
  }
}

export default Demoprops