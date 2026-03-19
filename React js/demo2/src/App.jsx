import React from 'react'
// import ClassState from './State/ClassState'
// import ClassProps from './Props/ClassProps'
// import FunProps from './Props/FunProps'
// import ClassState from './State/ClassState'
// import FunState from './State/FunState'
// import Form from './FormHandling/form'
// import Demoform from './FormHandling/Demoform'
import ProductAxios from './Effect/ProductAxios'
import DummyAxios from './Effect/DummyAxios'
import Index from './Website'
// import GamingAxios from './Effect/GamingAxios'
// import Tailwind from './Tail/Tailwind'
// import Header from './Website/Header'


function App() {
  return (
    <div>
      {/* <ClassState /> */}

      {/* <div className="container"> */}
          {/* <div className="row"> */}

         {/* <ClassProps img="https://hips.hearstapps.com/hmg-prod/images/ferrari-e-suv-2-copy-680287cac36b2.jpg?crop=1.00xw:0.838xh;0,0.0673xh" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <ClassProps img="https://m.media-amazon.com/images/I/71HE+SIzIcL._AC_UF1000,1000_QL80_.jpg" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <ClassProps img="https://i.ytimg.com/vi/zEr-mm8OSGo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAm0vvR3Ud4t5gSl4BF1LoxWA70Cw" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <ClassProps img="https://hips.hearstapps.com/hmg-prod/images/ferrari-e-suv-2-copy-680287cac36b2.jpg?crop=1.00xw:0.838xh;0,0.0673xh" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <ClassProps img="https://hips.hearstapps.com/hmg-prod/images/ferrari-e-suv-2-copy-680287cac36b2.jpg?crop=1.00xw:0.838xh;0,0.0673xh" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <ClassProps img="https://hips.hearstapps.com/hmg-prod/images/ferrari-e-suv-2-copy-680287cac36b2.jpg?crop=1.00xw:0.838xh;0,0.0673xh" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <ClassProps img="https://hips.hearstapps.com/hmg-prod/images/ferrari-e-suv-2-copy-680287cac36b2.jpg?crop=1.00xw:0.838xh;0,0.0673xh" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <ClassProps img="https://hips.hearstapps.com/hmg-prod/images/ferrari-e-suv-2-copy-680287cac36b2.jpg?crop=1.00xw:0.838xh;0,0.0673xh" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <ClassProps img="https://hips.hearstapps.com/hmg-prod/images/ferrari-e-suv-2-copy-680287cac36b2.jpg?crop=1.00xw:0.838xh;0,0.0673xh" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <ClassProps img="https://hips.hearstapps.com/hmg-prod/images/ferrari-e-suv-2-copy-680287cac36b2.jpg?crop=1.00xw:0.838xh;0,0.0673xh" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <ClassProps img="https://hips.hearstapps.com/hmg-prod/images/ferrari-e-suv-2-copy-680287cac36b2.jpg?crop=1.00xw:0.838xh;0,0.0673xh" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <ClassProps img="https://hips.hearstapps.com/hmg-prod/images/ferrari-e-suv-2-copy-680287cac36b2.jpg?crop=1.00xw:0.838xh;0,0.0673xh" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." /> */}
      
      
      {/* <FunProps img="https://m.media-amazon.com/images/I/71HE+SIzIcL._AC_UF1000,1000_QL80_.jpg" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <FunProps img="https://m.media-amazon.com/images/I/71HE+SIzIcL._AC_UF1000,1000_QL80_.jpg" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <FunProps img="https://m.media-amazon.com/images/I/71HE+SIzIcL._AC_UF1000,1000_QL80_.jpg" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <FunProps img="https://m.media-amazon.com/images/I/71HE+SIzIcL._AC_UF1000,1000_QL80_.jpg" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <FunProps img="https://m.media-amazon.com/images/I/71HE+SIzIcL._AC_UF1000,1000_QL80_.jpg" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <FunProps img="https://m.media-amazon.com/images/I/71HE+SIzIcL._AC_UF1000,1000_QL80_.jpg" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <FunProps img="https://m.media-amazon.com/images/I/71HE+SIzIcL._AC_UF1000,1000_QL80_.jpg" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <FunProps img="https://m.media-amazon.com/images/I/71HE+SIzIcL._AC_UF1000,1000_QL80_.jpg" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." />
      <FunProps img="https://m.media-amazon.com/images/I/71HE+SIzIcL._AC_UF1000,1000_QL80_.jpg" title="This IS Lamboughini" desc="Lambhourghni is Fastest car in world and this car is so costly and sport car.." /> */}


          {/* <ClassState /> */}

          {/* <FunState /> */}
        {/* <Form /> */}
        {/* <Demoform /> */}
        {/* <ProductAxios /> */}
        {/* <GamingAxios /> */}
        {/* <Tailwind /> */}
        <Index />

        {/* <DummyAxios /> */}
        

        
    {/* </div> */}
      {/* </div> */}
      </div>
  )
}

export default App