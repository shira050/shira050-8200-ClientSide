import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { getUserFromserverBynameAndPass } from "../Redax/Users/UserThank";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import ShowPictures from "./ShowPictures";
import FormPage from "./SignUp";
import { useState } from 'react/cjs/react.development';
import { useSelector } from 'react-redux';
import { loadOneUser } from '../Redax/Users/UserAction';
import { NewBasket } from '../Redax/Users/UserAction';
import { withRouter } from 'react-router-dom';

export default withRouter(function SignIn(Props) {

const [modal,setModal]=useState(true);
  const dispatch=useDispatch();
  const M = useSelector((store) => {return store.users.isMenneger });

 const toggle = () => {
  setModal(!modal);
      if(modal==true)
      Props.history.push("/")
  }
 

    return (

      <MDBContainer>
        {/* <MDBBtn onClick={toggle}>התחבר</MDBBtn> */}
        <MDBModal isOpen={modal} toggle={toggle}>
          <MDBModalHeader toggle={toggle}>הכנס את שמך ואת הסיסמא האישית שלך</MDBModalHeader>
          <MDBModalBody>

            <form>
              {/* <p className="h5 text-center mb-4">Sign in</p> */}
              <div className="grey-text">
                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                  success="right"  id="name"  />

                <MDBInput label="Your password" icon="lock" group type="password" validate id="pass" />
              </div>


              <div className="text-center">
</div>
<NavLink to="sign">הירשם עכשיו</NavLink>
            </form>
          </MDBModalBody>
         
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle} style={{backgroundColor:"#4b24da"}}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={() => IsMember(dispatch,M,setModal)} style={{backgroundColor:"#e02d9b"}}>כניסה</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  })




  const IsMember = async(dispatch,M,setModal) => {
 debugger
    const name = document.getElementById("name").value;
    const pass = document.getElementById("pass").value;
    const user =  await getUserFromserverBynameAndPass(dispatch, name, pass);
    
    if (user) {
    
      dispatch(loadOneUser(user));
     
      debugger
     dispatch(NewBasket(null));
     setModal(false);
    //  alert("ברוך הבא " +name);
    return user;
    }
    else
     {
       alert("אחד או יותר מהנתונים שגוי...");
      
      return;
    }

};