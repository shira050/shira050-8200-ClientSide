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

export default withRouter(function SignIn(Props) {

const [modal,setModal]=useState(true);
  const dispatch=useDispatch();
  // const M = useSelector((store) => {return store.users.isMenneger });

 const toggle = () => {
  setModal(!modal);
      if(modal==true)
      Props.history.push("/")
  }
 

    return (

      <MDBContainer>
        {/* <MDBBtn onClick={toggle}>התחבר</MDBBtn> */}
        <MDBModal isOpen={modal} toggle={toggle}>
          <MDBModalHeader toggle={toggle}>הכנס את תעודת הזהות שלך</MDBModalHeader>
          <MDBModalBody>

            <form>
              {/* <p className="h5 text-center mb-4">Sign in</p> */}
              <div className="grey-text">
                <MDBInput label="ת.ז" icon="user" group type="text" validate error="wrong"
                  success="right"  id="id"  />

              </div>


              <div className="text-center">
</div>
<NavLink to="sign">הירשם עכשיו</NavLink>
            </form>
          </MDBModalBody>
         
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle} style={{backgroundColor:"#4b24da"}}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={() => IsMember(dispatch,setModal)} style={{backgroundColor:"#e02d9b"}}>כניסה</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  })




  const IsMember = async(dispatch,setModal) => {
 debugger
    const id = document.getElementById("id").value;
    const user =  await getUserByID(dispatch, id);
    
    if (user) {
    
      dispatch(loadOneUser(user));
     
      debugger
    //  dispatch(NewBasket(null));
     setModal(false);
    //  alert("ברוך הבא " +name);
    return user;
    }
    else
     {
       alert("הנתונים שהכנסת שגויים..");
      
      return;
    }

};