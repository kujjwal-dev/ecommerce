import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import CartDetails from './components/CartDetails.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/app/store.js'
import toast, { Toaster } from 'react-hot-toast';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<CartDetails />} /> 
    </Route>



  )

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>    <RouterProvider router={router} />  <Toaster /> </Provider>

  </React.StrictMode>,
)
