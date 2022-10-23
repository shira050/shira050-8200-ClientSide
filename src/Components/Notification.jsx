import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { getUserByID } from "../Redax/Users/UserThank";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import FormPage from "./SignUp";
import { useState } from 'react/cjs/react.development';
import { useSelector } from 'react-redux';
import { loadOneUser } from '../Redax/Users/UserAction';
import { NewBasket } from '../Redax/Users/UserAction';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';

export default withRouter(function AdditionalContentExample(Props) {

const [modal,setModal]=useState(true);
const [unV,setunV] = useState({})
  const dispatch=useDispatch();

 const toggle = () => {
  setModal(!modal);
      if(modal==true)
      Props.history.push("/")
  }
 
    return (

      <MDBContainer>
        {/* <MDBBtn onClick={toggle}>התחבר</MDBBtn> */}
        <MDBModal isOpen={modal} toggle={toggle}>
          <MDBModalHeader toggle={toggle}>היום קיימים</MDBModalHeader>
          <MDBModalBody>

            <form>
              <p className="h5 text-center mb-4">{Props.match.params.cnt}</p>
              <div className="grey-text">
               
לקוחות בקופה שאינם מחוסנים...
              </div>


              <div className="text-center">
</div>
            </form>
          </MDBModalBody>
         
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle} style={{backgroundColor:"#4b24da"}}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  })
  ;


