import React from 'react'

function FunProps({img,title,desc}) {
  return (
    <div className='col-md-4'>
        <div className="card" style={{width: '18rem'}}>
  <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <button className='btn btn-danger'>Click Me..</button>
  </div>
</div>

    </div>
  )
}

export default FunProps