import { useState } from 'react';
import { useDispatch } from 'react-redux';
import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetAllMembersDoV1, getAllUsersFromserver } from "../Redax/Users/UserThank";
import { withRouter } from 'react-router-dom';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBFile
} from 'mdb-react-ui-kit';
    export default withRouter(function V1(Props) {

   
       let myUsersFromServer,myUser, myAddUser,myUppUser,myDeleteUser
       const [userList,setUserList]=useState ([])
    //    const [OneUser,setOneUser] = useState({})
    const dispatch = useDispatch();
   
   
       useEffect(async () => {
          
           myUsersFromServer = await GetAllMembersDoV1(dispatch);
           await setUserList(myUsersFromServer)
     
   
   
       }, [])
       async function MemberDetails(id){
   
   
        if(id>0){
          Props.history.push(`/MemberDetails/${id}`)
    
        }
      }
      return <div style={{margin:"40px 30px"}}>
       
      {/* ; font-family:"'Open Sans Condensed', sans-serif"; font-size: "64px"; font-weight: "700"; line-height: '64px'; margin: '0 0 0'; padding: '20px 30px'; text-align: 'center'; text-transform: 'uppercase'; */}
<h2 style={{color:'#111'  }}>החיסון הראשון</h2>

<p>מתחילת 2020, פיתוח חיסונים ל-COVID-19 נעשה באמצעות שיתוף פעולה בממדים חסרי תקדים של תעשיית התרופות הבינלאומית ושל ממשלות. לפי הקואליציה למוכנות ולחדשנות בתחום המגפות (Coalition for Epidemic Preparedness Innovations, CEPI) התפוצה הגאוגרפית של פיתוח החיסון היא 40% בצפון אמריקה, 30% באסיה ואוסטרליה, 26% באירופה, ומספר פרויקטים בדרום אמריקה ובאפריקה.

התחייבות להגעה לשלב של בדיקה ראשונה בבני אדם של חיסון פוטנציאלי מהווה עלות משמעותית עבור מפתחי חיסונים. העלות נאמדת בין 14 ל-25 מיליון דולר עבור שלב נסיוני, אבל עשוי להאמיר עד 70 מיליון דולר.[33][34] לשם השוואה, במהלך מגפת נגיף האבולה בשנים 2014–2015 היו 37 מועמדים לחיסונים בפיתוח דחוף, כאשר רק אחד הפך לחיסון מורשה בעלות כוללת לאישור היעילות בשלבי ניסויים II - III בעלות כוללת של מיליארד דולר.</p>

<br></br>
<h3 >לקוחות שהתחסנו</h3>

<table class="table" style={{background:'lightgray'}}>
  <thead class="black white-text">
    <tr>
      <th scope="col">#</th>
      <th scope="col">שם</th>
      <th scope="col">שם משפחה</th>
      <th scope="col">ת"ז</th>
      <th scope="col">כתובת</th>
      <th scope="col">עיר</th>
      <th scope="col">ת.לידה</th>
      <th scope="col">פלאפון</th>
      <th scope="col">טלפון</th>
      <th scope="col">לפרטי חיסונים</th>

    </tr>
  </thead>
  
  <tbody>
  {userList.map((x) =>
    <tr>
      <th scope="row">{x.memberCode}</th>
      <td>{x.memberName}</td>
      <td>{x.memberLastName}</td>
      <td>{x.memberID}</td>
      <td>{x.memberAdress}</td>
      <td>{x.memberCity}</td>
      <td>{x.memberBirthDate}</td>
      <td>{x.memberTel}</td>
      <td>{x.memberPhone}</td>
      <td onClick={() => MemberDetails(x.memberID)}><MDBBtn style={{background:"gray"}} rounded size="sg">לפרטים מלאים </MDBBtn></td>

    </tr>
    )}
  </tbody>
</table>


      </div>
    })