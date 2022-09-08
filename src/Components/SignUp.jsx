import React from "react";
import { useState } from "react/cjs/react.development"
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { MDBAlert } from 'mdbreact';
import { useEffect } from "react"; 
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SignIn from "./SignIn";
import { AddUser ,UppdateUser} from "../Redax/Users/UserThank";
import { render } from "react-dom";
import {store} from '../Redax/Reducers';

import { MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import ShowPictures from "./ShowPictures";
import { getUserFromserverBynameAndPass} from "../Redax/Users/UserThank";
import { MDBPaginationLink } from "mdb-react-ui-kit";
import { NewBasket } from "../Redax/Users/UserAction";
import { withRouter } from 'react-router-dom';
import { loadOneUser } from "../Redax/Users/UserAction";
export default withRouter(function FormPage(User){
debugger
const [modal,setModal]=useState(true);
  const dispatch=useDispatch();
  const M = useSelector((store) => {return store.users.isMenneger });
  const U = useSelector((store) => { return store.users.user });

  const [errors, setErrors] = useState({ userName: "שדה חובה", userPassword: "שדה חובה" });
  const [user, setUser] = useState({});

  useEffect(async () => {
    debugger
    if(U.userPassword != "")
    {
      // let myUser = await getUserFromserverBynameAndPass(dispatch,(U.userName),(U.userPassword ));
      // await setUser(myUser); 
      await setUser(U);
    }
   
   
  },[])
 const toggle = () => {
  setModal(!modal)
  if(modal==true)
  User.history.push("/")
  }
  const newUser =async (dispatch) => {
    debugger
    if(user.userName&&user.userPassword&&!(User.match.params.passUser)&&errors.userName=="תקין!"&&errors.userPassword=="תקין!"&&errors.email=="תקין!")
   {dispatch(NewBasket(null));
     await AddUser(dispatch, user.userName,user.userLastName, user.userPassword, user.userMail);
    
    dispatch(loadOneUser(user));
alert("ברוך הבא "+ user.userName);
    User.history.push("/Pictures");

   }
   else if(User.match.params.passUser&&user.userName&&user.userPassword&&errors.userName=="תקין!"&&errors.userPassword=="תקין!"&&errors.email=="תקין!")
   {
     debugger
    await UppdateUser(dispatch,user.codeUser, user.userName,user.userLastName, user.userPassword, user.userMail);
    dispatch(loadOneUser(user));
    alert( user.userName+" "+ user.userLastName +"עודכן בהצלחה");
    User.history.push("/");
   }
   else if(!user.userName||!user.userPassword)
   {
    alert("שם וסיסמא הינם שדות חובה על מנת להירשם");
    
  }
  else 
  {
   alert("בדוק שכל השדות תקינים...");
   
 }
}

const validateName = (event) => {
let pattern="^(?=[a-zA-Zא-ת1-9']{4,10}$)(?!.*[_.]{2})[^_.].*[^_.]$"

  if (!event.target.value)
    setErrors({ ...errors, userName: "שדה חובה" });
  else if (!event.target.value.match(pattern)) 
    setErrors({ ...errors, userName: "אורך השם חייב להיות בין 4 ל10 תווים(אותיות ,מספרים וגרש) " });
  else {
    setErrors({ ...errors, userName: "תקין!" }); 
    setUser({ ...user, userName:document.getElementById("defaultFormNameEx").value})
    
     //setUser({ ...user, userName: event.target.value })
  }
  setUser({ ...user, userName:document.getElementById("defaultFormNameEx").value})
}
const validateLastName = (event) => {
  let pattern="^[-a-zA-Zא-ת']+$"
  
    if (!event.target.value)
      setErrors({ ...errors, userLastName: "שדה חובה" });
    else if (!event.target.value.match(pattern)) 
      setErrors({ ...errors, userLastName: " חייב להכיל רק אותיות או גירש " });
    else {
      setErrors({ ...errors, userLastName: "תקין!" }); 
       }
    setUser({ ...user, userLastName:document.getElementById("defaultFormLastNameEx").value})
  
  }

const validateuserPassword = (event) => {

  var userPassword = /^[A-Za-z]\w{7,14}$/;
  if (event.target.value.match(userPassword)) {
    setErrors({ ...errors, userPassword: "תקין!" });
    setUser({ ...user, userPassword: event.target.value })
  }
  else {
    setErrors({ ...errors, userPassword: 'סיסמא חייבת להכיל בין 7 ל-16 תווים ולהתחיל באות!!!' })
   
  }
  setUser({ ...user, userPassword: event.target.value })


}
const validateEmail = (event) => {
  if (!event.target.value) {
    setErrors({ ...errors, email: "שדה חובה!" });

  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target.value)) {
    setErrors({ ...errors, email: "לא תקין!" });
  }
  else {
    setErrors({ ...errors, email: "תקין!" });
setUser({ ...user, userMail: event.target.value })
  } 
  setUser({ ...user, userMail: event.target.value })

}
 

    return (

      <MDBContainer>
       
        <MDBModal isOpen={modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>
        {! (User.match.params.passUser) ?
                  <h3 className="my-3">
                       <MDBIcon icon="lock" />
                  הירשם:
                  </h3>
                  :
                  <h3 className="my-3">
                     <MDBIcon icon="lock" /> 
                  טופס עדכון:
                 
                  </h3>
                }

              </MDBModalHeader>
          <MDBModalBody>

            <form>
              {/* <p className="h5 text-center mb-4">Sign in</p> */}
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                הכנס שם
              </label>
              <input
                type="text"
                id="defaultFormNameEx"
                className="form-control"
                required
                 value={user.userName} 
                onChange={(e) => validateName(e)}
                name="userName"
              ></input>
              <p > *{errors.userName}</p>
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
              הכנס שם משפחה
              </label>
              <input
                type="text"
                id="defaultFormLastNameEx"
                className="form-control"
                value={user.userLastName} 
                onChange={(e) => validateLastName(e)}
              ></input>
             <p> *{errors.userLastName}</p>
              <label
                htmlFor="defaultFormuserPasswordwordEx"
                className="grey-text font-weight-light"
              >
                הכנס סיסמא אישית
              </label>
              <input
                type="password"
                id="defaultFormuserPasswordwordEx"
                className="form-control"
                name="userPassword"
                 value={user.userPassword}
                required
                onChange={(e) => validateuserPassword(e)}
              />
              <p>*{errors.userPassword}</p>


              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                הכנס אימייל
              </label>
              <input
                type="email"
                id="defaultFormEmailEx"
                className="form-control"
                name="email" 
                 value={user.userMail} 
                onChange={(e) => validateEmail(e)}
              ></input>
              <p > *{errors.email}</p>


              <div className="text-center">
</div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle} style={{backgroundColor:"#4b24da"}}>Close</MDBBtn>
               
                <MDBBtn color="primary" onClick={() => newUser(dispatch)} style={{backgroundColor:"#e02d9b"}}>שלח</MDBBtn>

         </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  



  
})
