import React from 'react';
import { Link } from "react-router-dom";
import { json, checkStatus } from './utils';

const Layout = (props) => {
  return (
    <React.Fragment>

    <nav className="text-center text-bg-secondary p-2 fw-bold border border-dark">
       <h3> React Currency Converter </h3>
      </nav>

      <div className="container">
        {props.children}
      </div>

      <footer className="text-center text-bg-secondary p-3 border border-dark">
        <div>Created by Ryan Asher</div>
        <a href="https://www.linkedin.com/in/rpasher1987/" target="_blank" rel="noreferrer" className="m-1"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/Rpasher1987" target="_blank" className="m-1"><i className="bi bi-github text-success"></i></a>
        <a href="https://www.facebook.com/RpAsher327" target="_blank" className="m-1"><i className="bi bi-facebook text-primary"></i></a>
        <a href="" target="_blank" className="m-1"><i className="bi bi-envelope text-white"></i></a>
        
      </footer>


    </React.Fragment>
  );
}

export default Layout;

