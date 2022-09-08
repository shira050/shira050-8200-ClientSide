import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { MDBNavLink } from "mdbreact"
import ShowPictures from './ShowPictures';
import { getKategoryByCode } from '../Redax/Kategories/KategoriesThank';
import { useDispatch, useSelector } from "react-redux";
import { store } from '../Redax/Reducers';
import { useParams } from 'react-router';
import { loadPicture } from '../Redax/Picturs/PictursAction';
import { MDBNavbarLink } from 'mdb-react-ui-kit';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { getPictureByCode } from '../Redax/Picturs/PictursThank';
import { useEffect, useState } from 'react/cjs/react.development';
import { loadOneUser } from '../Redax/Users/UserAction';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Params } from 'react-router';
import { addToBasket } from '../Redax/Users/UserAction';
import { MDBCardHeader } from 'mdb-react-ui-kit';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { getAllUsersFromserver } from '../Redax/Users/UserThank';


export default withRouter(function OnePictureOnClik(codePicture) {
  
  debugger
  const dispatch = useDispatch();
  let params = useParams();
  const M = useSelector((store) => { return store.users.isMenneger });
  const U = useSelector((store) => { return store.users.user });
  const [x, setX] = useState([]);
  const [userList,setUserList]=useState([]);
   const [ n,setn]=useState();
   let c2;
  useEffect(async () => {
    debugger
    let p = await getPictureByCode(dispatch, codePicture.match.params.codePicture);
 
    await setX(p);
  
c2= await getKategoryByCode(dispatch,p.codeKategory)
                      setn( c2.nameKategory);
let u=await getAllUsersFromserver(dispatch);
setUserList(u);
  }, []);

  debugger
  const addToB = (x) => {
    debugger
    if (U.codeUser == "") {
      debugger;
      alert("על מנת להוסיף פרטים עליך להירשם או להיכנס אם יש לך חשבון כבר");
      codePicture.history.push("/sign_in");

    }
    else {
      const pToBasket = {
        codePicture: x.codePicture,
        codeUser: x.codePicture,
        codeKategory: x.codeKategory,
        uppDateToWeb: x.uppDateToWeb,
        cascadingPicture: x.cascadingPicture,
        routeSoursePicture: x.routeSoursePicture,
        routeGoalPicture: x.routeGoalPicture


      }
      // dispatch(addToBasket(pToBasket));
      //  alert("המוצר נוסף בהצלחה");


      var card = prompt("הכנס סיסמת כרטיס אשראי");

      try {

        {
          // (card) &&
          // await DoInviteByBascet(dispatch, Basket, id)
        }


        
          {
            (card) &&
            codePicture.history.push(`/game/${x.codePicture}`)
          }

          {
            (!card) &&
            alert("סיסמא הכרחית להמשך פעילות!!! ")
          }
        }
    catch (eror) {
            alert("תוכל לחכות לחודש הבא  ");
            //  alert(eror.message);
            //  console.error("...",eror.ArgumentException);

          }







        }

      }
      
  return (
        <>

          <MDBRow style={{ margin: "30px 0px" }}>
            <MDBCol style={{ maxWidth: "55rem", margin: 'auto' }}>
              <MDBCard reverse>
                <MDBCardImage cascade src={`http://localhost:26064/images/QuizPictures/${x.routeGoalPicture}`} />
                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle><strong>{x.namePicture}</strong></MDBCardTitle>
                  <h5 className="indigo-text">
                    {/* {setCName(getKategoryByCode(dispatch, x.codeKategory).nameKategory)}
                    {alert(getKategoryByCode(dispatch, x.codeKategory).nameKategory)} */}

                     <MDBCardText >בקטגורייה: { n} </MDBCardText>

                  </h5>


                  {(U.codeUser == x.codeUser) ?
                    <>
                    
                    <MDBCardHeader >הועלה ע"י:<strong>אני</strong><br />בתאריך{x.uppDateToWeb}</MDBCardHeader>
                    <p style={{color:"red"}}>שים לב!</p>
                    <p style={{color:"red"}}>לא תוכל להעלות את הדירוג של התמונה 
                      <span style={{ fontWeight: "bold"}}>שלך</span> 
                      ע"י הורדה...</p>
                    </>
                    :
                  <>
                    {userList.map((u) => (
              (x.codeUser==u.codeUser)&&
               <MDBCardHeader >הועלה ע"י:{u.userName}<br />בתאריך{x.uppDateToWeb}</MDBCardHeader>

              ))}
              </>
                  }
  <br/>
                  {[1,2,3,4,5].map((c) => (
                    // <i class="fa fa-info-circle"></i>
                    (c <= x.cascadingPicture)? <i style={{"color":"gold"}} class="fas fa-star"></i>:<i style={{"color":"gray"}} class="fas fa-star"></i>
                  ))
                  }
                  
                  <br/>
                 

                 <br/>
                    {/* // else */}
                    
                  
                  <MDBBtn style={{}} color='deep-orange'>
                <MDBIcon icon='clone left'  /> 
               
            <a href={`http://localhost:26064/images/QuizPictures/${x.routeGoalPicture}`}  download
                  // <p   
                  onClick={async()=>{debugger
                   console.log("lll"+x);
                axios.put("http://localhost:26064/api/PictureControler/cascading?id=3066"+U.codeUser,x)}} 
               
               >הורדה
               {/* </p> */}
               </a>
    
     {/* <a href={myPDF} download={`${x.routeGoalPicture}`} 
      onClick={async()=>{
                  // axios.put("http://localhost:26064/api/PictureControler/cascading?"+"id="+U.codeUser,x)}}
                axios.put("http://localhost:26064/api/PictureControler/cascading?"+"id="+U.codeUser,x)}} 
               > הורדה </a> */}

                       
              </MDBBtn>
              <br></br>

              <MDBBtn style={{margin:"5px"}} href='#add' outline><NavLink to={`/game/${x.codePicture}`} >צפה בתמונה המקורית</NavLink></MDBBtn>

                  {/* <MDBNavbarLink><MDBBtn onClick={() => addToB(x)} >הפוך למשחק</MDBBtn></MDBNavbarLink> */}
                  <MDBNavbarLink><NavLink to='/Pictures' >חזרה לכל המשחקים</NavLink></MDBNavbarLink>

                  <br></br>
                  <a href="#!" className="icons-sm li-ic ml-1" style={{margin:"10px"}}>
                    <MDBIcon fab icon="linkedin-in" /></a>
                  <a href="#!" className="icons-sm tw-ic ml-1" style={{margin:"10px"}}>
                    <MDBIcon fab icon="twitter" /></a>
                  <a href="#!" className="icons-sm fb-ic ml-1" style={{margin:"10px"}}>
                    <MDBIcon fab icon="facebook-f" /></a>
                   

                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>










        </>
      );
    })
    const stylePage = {
 
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
  }
  const styleSection = {
     
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  