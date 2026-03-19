import React from "react";
import Product from "./Product";
import Admin from "./Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Product />
      <hr />
      <Admin />
      <ToastContainer />
    </>
  );
}

export default App;