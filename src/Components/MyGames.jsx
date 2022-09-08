import React, { Component } from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn, MDBDataTable } from "mdbreact";
import { useSelector } from "react-redux"
import { useState } from "react/cjs/react.development";
import { useDispatch } from "react-redux";
import { deletPictureInBasket } from "../Redax/Users/UserAction";
import { MDBAlert } from "mdbreact";
import { MDBContainer } from "mdbreact";
import { MDBNotification } from "mdbreact";
import { useNavigate } from "react-router";
import { Navigator } from "react-router";
import { withRouter } from 'react-router-dom';
import { useEffect } from "react";
import { GetAllPicturesOfOneUser} from '../Redax/Picturs/PictursThank';
import { MDBIcon } from "mdbreact";
import axios from "axios"
export default withRouter(function MyGames(Props){

  const dispatch = useDispatch();
  const [myGames,setMyGames]=useState([]);
  const U = useSelector((store) => { return store.users.user });

  useEffect(async () => {

 const p=await GetAllPicturesOfOneUser(dispatch,U.codeUser)
    setMyGames(p);
    console.log(myGames);
  },[]);
  
  
  

  return <>
  
  <MDBNotification
   autohide={5000} 
   bodyClassName="p-5 font-weight-bold white-text"
   className="stylish-color-dark"
   closeClassName="blue-grey-text"
   fade
   icon="bell"
   iconClassName="blue-grey-text"
   message=" מאחר והעלית את כל התמונות בעמוד זה הורדות כאן לא יעלו לך את הדירוג....."
   show
   title="שים לב"
   titleClassName="elegant-color-dark white-text"
 />
 
  
{myGames.length>0?
  
    <MDBRow className="my-2" center>
      <MDBCard className="w-100">
        <MDBCardBody>
          <MDBTable className="Picture-table">
            <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" >
            <tr>
              <td style={{width:'33.333%'}}>תמונת מקור</td>
              <td style={{width:'33.333%'}}> <strong>שם משחק</strong> </td>
              {/* <td style={{width:'25%'}}><strong>מחיר </strong></td> */}
              <td style={{width:'33.333%'}}>הורד את המשחק כקובץ</td>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {
                myGames.map((row) =>

                        <tr>
                    <td style={{width:'25%'}}><img src={`http://localhost:26064/images/QuizPictures/${row.routeGoalPicture}`} alt={row.routeGoalPicture} className="img-fluid z-depth-0" /></td>
                 <td style={{width:'33.333%'}}><h5 className="mt-3"><strong>{row.routeGoalPicture}</strong></h5></td>
                    {/* <td style={{width:'25%'}}> <p className="text-muted">ללא עלות</p></td> */}
                    <td style={{width:'33.333%'}}>
                      <MDBTooltip placement="top">
                        <MDBBtn color="primary" size="sm" >
                        <a style={{color:"#ffffff"}} href={`http://localhost:26064/images/QuizPictures/${row.routeGoalPicture}`} download onClick={()=>{axios.put("http://localhost:26064/api/PictureControler/cascading?"+"id="+U.codeUser,row)}}> 
                        <MDBIcon icon="angle-double-down" /></a>
                        </MDBBtn>
                        <div>הורדה</div>
                      </MDBTooltip></td>
                  </tr>)

              }</MDBTableBody>
         
        
        
             </MDBTable>

        </MDBCardBody>
      </MDBCard>
    </MDBRow>
:
<div class="info-msg" style={{ margin: '10px 0',padding: "10px",borderRadius: "3px 3px 3px 3px",color: "black",backgroundColor: "lightsteelblue"}}>
  <i class="fa fa-info-circle"></i>
 אין משחקים עדיין...
</div>

}
  </>
})



