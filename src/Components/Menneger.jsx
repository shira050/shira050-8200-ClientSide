import React, { useState } from "react";
import { getUserByID,ReadMenegerPassword } from "../Redax/Users/UserThank";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import FormPage from "./SignUp";
import { store } from "../Redax/Reducers";
import { isMenneger } from '../Redax/Users/UserAction';
import { Navigate } from 'react-router';
import { withRouter } from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBRow, MDBCol, MDBInput } from 'mdbreact';
import password from "../assets/images/Password.xml"




export default withRouter(function Menneger(Props) {
  const [modal,setModal]=useState(true);
  const dispatch=useDispatch();
  const M = useSelector((store) => {return store.users.isMenneger });

 const toggle = () => {
  setModal(!modal)
  if(modal==true)
  Props.history.push("/")
  }
 
  
  const IsMember = async (dispatch) => {
    const name = document.getElementById("name").value;
    const pass = document.getElementById("pass").value;
    const Mpass = document.getElementById("Mpass").value;

    const user = await getUserByID(dispatch, name, pass);
    const MennegerPass=await ReadMenegerPassword(dispatch);
    if (user && Mpass == MennegerPass) {
      dispatch(isMenneger(1));
     
      alert("ברוך הבא " + name);
      alert("הינך על מצב מנהל אנא ודא את שינוי הגדרת המשתמש לפני יציאתך...");
      Props.history.push("/Pictures");
      
      return user;
    }
    else {
      alert("אחד או יותר מהנתונים שגוי...");
      return;
    }

  }





  return (
   
    <MDBContainer>
    {/* <MDBBtn onClick={toggle}>התחבר</MDBBtn> */}
    <MDBModal isOpen={modal} toggle={toggle}>
      <MDBModalHeader toggle={toggle}>הכנס פרטים</MDBModalHeader>
      <MDBModalBody>

        <form>
          {/* <p className="h5 text-center mb-4">Sign in</p> */}
          <div className="grey-text">
            <MDBInput label="שם" icon="user" group type="text" validate error="wrong"
              success="right" id="name" />

            <MDBInput label="סיסמא אישית" icon="lock" group type="password" validate id="pass" />
            <MDBInput label="סיסמת מנהל" icon="lock" group type="password" validate id="Mpass" />

          </div>


          <div className="text-center">
</div>
        </form>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" onClick={toggle} style={{backgroundColor:"#4b24da"}}>Close</MDBBtn>
        <MDBBtn color="primary" onClick={() => IsMember(dispatch,M,setModal)} style={{backgroundColor:"#e02d9b"}}>כניסה</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  </MDBContainer>
  
);
}
)

