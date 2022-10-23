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
import { getUserByID} from "../Redax/Users/UserThank";
import { MDBPaginationLink } from "mdb-react-ui-kit";
import { NewBasket } from "../Redax/Users/UserAction";
import { withRouter } from 'react-router-dom';
import { loadOneUser } from "../Redax/Users/UserAction";
export default withRouter(function FormPage(User){
 
const [modal,setModal]=useState(true);
  const dispatch=useDispatch();
  const U = useSelector((store) => { return store.users.user });

  const [errors, setErrors] = useState({ memberID: "שדה חובה", memberName: "שדה חובה"});
  const [user, setUser] = useState({});
let d;


  useEffect(async () => {
    debugger
    if(U.memberID != "")
    {
      await setUser(U);
      setErrors({ ...errors, memberID: "תקין!",memberName:"תקין!" });
      var date1=new Date(U.memberBirthDate);
      d=""+date1.getDate()+"/"+(date1.getMonth()+1)+"/"+date1.getFullYear()


    }
   if(User.match.params.id!=null)
   {
    let myUser = await getUserByID(dispatch,(User.match.params.id ));
      await setUser(myUser);
      setErrors({ ...errors, memberID: "תקין!",memberName:"תקין!" });
    
      var date1=new Date(myUser.memberBirthDate);
      d=""+date1.getDate()+"/"+(date1.getMonth()+1)+"/"+date1.getFullYear()
debugger
   }
  //  const [day, month, year] = d.split('/');

  //  const date = `${year}-${month}-${day}`;
   setUser({...user,memberBirthDate:d});
   
  },[])

 const toggle = () => {
  setModal(!modal)
  if(modal==true)
  User.history.push("/")
  }
  const newUser =async (dispatch) => {
    debugger
    if(user.memberName&&user.memberID&&!(User.match.params.id)&&errors.memberName=="תקין!"||errors.memberName==""&&errors.memberLastName=="תקין!"||errors.memberLastName==""&&errors.memberID=="תקין!"||errors.memberID==""&&errors.memberAdress=="תקין!"||errors.memberAdress==""&&errors.memberCity=="תקין!"||errors.memberCity==""&&errors.memberBirthDate=="תקין!"||errors.memberBirthDate==""&&errors.memberTel=="תקין!"||errors.memberTel==""&&errors.memberPhone=="תקין!"||errors.memberPhone=="")
   {
     await AddUser(dispatch, user.memberName,user.memberLastName, user.memberID, user.memberAdress, user.memberCity, user.memberTel, user.memberPhone);
    
    dispatch(loadOneUser(user));
alert("ברוך הבא "+ user.memberName);
    User.history.push("/");

   }
   else if(User.match.params.id&&user.memberName&&user.memberID&&errors.memberName=="תקין!"||errors.memberName==""&&errors.memberLastName=="תקין!"||errors.memberLastName==""&&errors.memberID=="תקין!"||errors.memberID==""&&errors.memberAdress=="תקין!"||errors.memberAdress==""&&errors.memberCity=="תקין!"||errors.memberCity==""&&errors.memberBirthDate=="תקין!"||errors.memberBirthDate==""&&errors.memberTel=="תקין!"||errors.memberTel==""&&errors.memberPhone=="תקין!"||errors.memberPhone=="")
   {
     debugger
    await UppdateUser(dispatch, user.memberName,user.memberLastName, user.memberID, user.memberAdress, user.memberCity, user.memberTel, user.memberPhone);
    dispatch(loadOneUser(user));
    alert( user.memberName+" "+ user.memberLastName +"עודכן בהצלחה");
    User.history.push("/");
   }
   else if(!user.memberName||!user.memberID)
   {
    alert("שם ות.ז הינם שדות חובה על מנת להירשם");
    
  }
  else 
  {
   alert("בדוק שכל השדות תקינים...");
   
 }
}

const validateName = (event) => {
let pattern="^(?=[a-zA-Zא-ת1-9']{4,10}$)(?!.*[_.]{2})[^_.].*[^_.]$"

  if (!event.target.value)
    setErrors({ ...errors, memberName: "שדה חובה" });
  else if (!event.target.value.match(pattern)) 
    setErrors({ ...errors, memberName: "אורך השם חייב להיות בין 4 ל10 תווים(אותיות ,מספרים וגרש) " });
  else {
    setErrors({ ...errors, memberName: "תקין!" }); 
    setUser({ ...user, memberName:document.getElementById("defaultFormNameEx").value})
    
     //setUser({ ...user, memberName: event.target.value })
  }
  setUser({ ...user, memberName:document.getElementById("defaultFormNameEx").value})
}
const validateLastName = (event) => {
  let pattern="^[-a-zA-Zא-ת']+$"
  
    if (!event.target.value)
    setErrors({ ...errors, memberLastName: "תקין!" }); 
    else if (!event.target.value.match(pattern)) 
      setErrors({ ...errors, memberLastName: " חייב להכיל רק אותיות או גירש " });
    else {
      setErrors({ ...errors, memberLastName: "תקין!" }); 
       }
    setUser({ ...user, memberLastName:document.getElementById("defaultFormLastNameEx").value})
  
  }

const validatememberID = (event) => {

  var memberID = /^[0-9]{7,9}$/;
  if (event.target.value.match(memberID)) {
    setErrors({ ...errors, memberID: "תקין!" });
    setUser({ ...user, memberID: event.target.value })
  }
  else {
    setErrors({ ...errors, memberID: 'ת.ז שגויה!!' })
   
  }
  setUser({ ...user, memberID: event.target.value })


}
const validateAdress = (event) => {

  var memberAdress = /^\s*\S+(?:\s+\S+)/;
  if (event.target.value.match(memberAdress)||event.target.value=="") {
    setErrors({ ...errors, memberAdress:  "תקין!"  });
    setUser({ ...user, memberAdress: event.target.value })
  }
  else {
    setErrors({ ...errors, memberAdress: "לא תקין!" });
   
  }
  setUser({ ...user, memberAdress: event.target.value })


}

const validatePhon = (event) => {
  var regex = /^[0-9\-\+]{9,15}$/  ;
  if (event.target.value.match(regex)||event.target.value=="") {
    setUser({ ...user, memberPhone: event.target.value });
    setErrors({ ...errors, memberPhone:  "תקין!"  });

  }
  else {
   
    setErrors({ ...errors, memberPhone: "לא תקין!" });
  }
 
  setUser({ ...user, memberPhone: event.target.value })

}
const validateBirthDate = (event) => {
  
  var d2 = new Date();
     var d1= new Date(event.target.value);

     if(d2.getFullYear()<d1.getFullYear() )
     setErrors({ ...errors, memberBirthDate:"בדוק ששדה השנה תקין" });
    else{
     
      if(d2.getFullYear()===d1.getFullYear() )
      {
        if(d2.getMonth()<d1.getMonth() )
        setErrors({ ...errors, memberBirthDate:  "בדוק ששדה החודש תקין " });

        else{
          if(d2.getMonth()===d1.getMonth())
          {

            if(d2.getDate()<d1.getDate())
            setErrors({ ...errors, memberBirthDate:  "בדוק ששדה היום תקין" });
            else{  
              setUser({ ...user, memberBirthDate: event.target.value })
              setErrors({ ...errors, memberBirthDate:  "תקין!" });
           
            }
          }
           
        }
      }
     

    }    
    
  }
 

  
 

const validateTel = (event) => {
  debugger
  var regex =  /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/
  if (event.target.value.match(regex)||event.target.value=="") {
  
    setUser({ ...user, memberTel: event.target.value })
    setErrors({ ...errors, memberTel:  "תקין!"  });

  }
  else {
   
    setErrors({ ...errors, memberTel: "לא תקין!" });
  }
 
  setUser({ ...user, memberTel: event.target.value })

}

    return (

      <MDBContainer>
       
        <MDBModal isOpen={modal} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>
        {! (User.match.params.id) ?
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
                 value={user.memberName} 
                onChange={(e) => validateName(e)}
                name="memberName"
              ></input>
              <p > *{errors.memberName}</p>
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
                value={user.memberLastName} 
                onChange={(e) => validateLastName(e)}
              ></input>
             <p> *{errors.memberLastName}</p>
              <label
                htmlFor="defaultFormuserPasswordwordEx"
                className="grey-text font-weight-light"
              >
הכנס מספר זהות
              </label>
              <input
                type="text"
                id="defaultFormuserPasswordwordEx"
                className="form-control"
                name="userPassword"
                 value={user.memberID}
                required
                onChange={(e) => validatememberID(e)}
              />
              <p>*{errors.memberID}</p>


              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                הכנס תאריך לידה
              </label>
              <input
                type="date"
                id="defaultFormEmailEx"
                className="form-control"
                value={user.memberBirthDate}
                

                onChange={(e) => validateBirthDate(e)}

              ></input>
              <p > *{errors.memberBirthDate}</p>


              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                הכנס כתובת
              </label>
              <input
                type="text"
                id="defaultFormEmailEx"
                className="form-control"
                 value={user.memberAdress} 
                onChange={(e) => validateAdress(e)}
              ></input>
              <p > *{errors.memberAdress}</p>


              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                הכנס עיר מגורים
              </label>
              <input
                type="text"
                id="defaultFormCity"
                className="form-control"
                 value={user.memberCity} 
                onChange={(e) => setUser({ ...user, memberCity: e.target.value })}
              ></input>
              <p > *{errors.memberCity}</p>


              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                הכנס פלאפון
              </label>
              <input
                type="text"
                id="defaultFormEmailEx"
                className="form-control"
                 value={user.memberPhone} 
                onChange={(e) => validatePhon(e)}
              ></input>
              <p > *{errors.memberPhone}</p>


              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                הכנס טלפון
              </label>
              <input
                type="text"
                id="defaultFormEmailEx"
                className="form-control"
                 value={user.memberTel} 
                onChange={(e) => validateTel(e)}
              ></input>
              <p > *{errors.memberTel}</p>
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
