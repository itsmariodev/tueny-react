// import { Button } from 'semantic-ui-react';
// import  './App.scss'
import React from "react";
import { ToastContainer } from "react-toastify";
import { Navigation } from "./routes";
import { AuthProvaider } from "./context";

// import { ClientLayout } from "./layouts";

export default function App() {
  return (
    <AuthProvaider>
      <Navigation />

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </AuthProvaider>
  );
}
