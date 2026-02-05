import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './componet/Login'
import ProtectedRoute from './componet/ProtectedRoute'

import Dashboard from './componet/Dashboard'
import AddProduct from './componet/AddProduct'
import ProductList from './componet/ProductList'
// import ProductList from './componet/ProductList'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/products' element={<ProtectedRoute>
            <ProductList />
          </ProtectedRoute>}
          />
          <Route path='/addproduct' element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App