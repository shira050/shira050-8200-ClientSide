import React, { Component } from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn, MDBDataTable } from "mdbreact";
import { useSelector } from "react-redux"
import { useState } from "react/cjs/react.development";
import { useDispatch } from "react-redux";
import { updatePictureInBasket } from "../Redax/Users/UserAction";
import { deletPictureInBasket } from "../Redax/Users/UserAction";
import { DoInviteByBascet } from "../Redax/Invaites/InvaitesThank";
import { updatePictureB } from "../Redax/Users/UserThank";
import { MDBAlert } from "mdbreact";
import { MDBContainer } from "mdbreact";
import { MDBNotification } from "mdbreact";
import { useNavigate } from "react-router";
import { Navigator } from "react-router";
import { withRouter } from 'react-router-dom';
import { NewBasket } from "../Redax/Users/UserAction";
import { useEffect } from "react";
export default withRouter(function eCommercePage(Props){

  const dispatch = useDispatch();
  const Basket = useSelector((s) => { return s.users.basket });
  const id = useSelector((s) => { return s.users.user.codeUser });
  const finalPrice=useSelector((s)=>{return s.users.finalPriceInBasket});
  useEffect(async () => {
 
    
  },[]);
  const uppProInB = async (dispatch, x, Basket) => {
  
    const count=document.getElementById("count").value;
  
    const pInB = {
      codePicture: x.codePicture,
      namePicture: x.namePicture,
      count:count,
      price: x.price,
      finalPrice: x.price
    }
 
    await updatePictureB(dispatch, pInB,count,Basket);
  }
  
  const deletPictureInB = (dispatch, x) => {
    dispatch(deletPictureInBasket(x));
  }
  
  // const finalPriceInBasket=()=>{
  //   let i,sum=0;
  //   for(i=0;i<Basket.length  ;i++)
  // sum+=Basket[i].finalPrice;
  //   setFinalPrice(sum);
  // }
  const DoInviteByB = async (dispatch, Basket,id) => {
    // finalPriceInBasket();
    var card=prompt("הכנס סיסמת כרטיס אשראי");
   debugger
    try{
    { (card)&&
      
        await DoInviteByBascet(dispatch, Basket,id)
   }
      
     
     {(card)&&
      await dispatch(NewBasket(null))}
     {(card)&&
      Props.history.push("/bless")}
     
      {(!card)&&
        alert("סיסמא הכרחית להמשך פעילות!!! ")}
    }
   catch( eror){
    alert("תוכל לחכות לחודש הבא  ");
    //  alert(eror.message);
    //  console.error("...",eror.ArgumentException);
    
   }
  }

   
  return <>
  
  <MDBNotification
   autohide={3000} 
   bodyClassName="p-5 font-weight-bold white-text"
   className="stylish-color-dark"
   closeClassName="blue-grey-text"
   fade
   icon="bell"
   iconClassName="blue-grey-text"
   message="שים לב שהמוצרים שהוספת לסל ימחקו ממנו בעת יציאתך מהחשבון שלך...."
   show
   text="ההודעה תימחק בעוד דקה..."
   title="שים לב"
   titleClassName="elegant-color-dark white-text"
 />
 
  
{Basket.length>0?

    <MDBRow className="my-2" center>
      <MDBCard className="w-100">
        <MDBCardBody>
          <MDBTable className="Picture-table">
            <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" >
            <tr>
              <td style={{width:'33.333%'}}>תמונת מקור</td>
              <td style={{width:'33.333%'}}> <strong>שם משחק</strong> </td>
              {/* <td style={{width:'25%'}}><strong>מחיר </strong></td> */}
              <td style={{width:'33.333%'}}>מחק משחק זה מהמשחקים שלי</td>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {
                Basket.map((row) =>

                        <tr>
                    <td style={{width:'33.333%'}}><img src={`http://localhost:26064/images/${row.routeGoalPicture}`} alt={row.routeGoalPicture} className="img-fluid z-depth-0" /></td>
                 <td style={{width:'33.333%'}}><h5 className="mt-3"><strong>{row.routeGoalPicture}</strong></h5></td>
                    {/* <td style={{width:'25%'}}> <p className="text-muted">{row.price}</p></td>, */}
                    {/* <td style={{width:'25%'}}> <p className="text-muted">ללא עלות</p></td> */}
                    {/* <td style={{width:'25%'}}><MDBInput onChange={() => uppProInB(dispatch, row)}  id="count" type="number" value={row.count} className="form-control" style={{ width: "100px" }} /></td>, */}
                    <td style={{width:'33.333%'}}>
                      <MDBTooltip placement="top">
                        <MDBBtn color="primary" size="sm" onClick={() => deletPictureInB(dispatch, row)}>
                          X
                        </MDBBtn>
                        <div>הסר פריט זה מהסל</div>
                      </MDBTooltip></td>
                  </tr>)

              }</MDBTableBody>
            
        
        
             </MDBTable>
             <MDBBtn rounded color="primary"   style={{marginRight:"90%"}}>סכום סופי:{finalPrice}</MDBBtn>

             <MDBBtn rounded color="primary"  onClick={() => DoInviteByB(dispatch,Basket,id)}>הפוך תמונות למשחקים</MDBBtn>

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



