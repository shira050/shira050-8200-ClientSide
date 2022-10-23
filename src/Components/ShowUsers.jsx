
import { useEffect } from 'react';
import axios from 'axios';
 import { getAllUsersFromserver ,getUserFromserverBynameAndPass,AddUser,UppdateUser,RemoveUser} from '../Redax/Users/UserThank';
 import { useState } from 'react';
 import { useDispatch } from 'react-redux';
 import React from 'react';
 import { MDBBtn } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { getUnV } from '../Redax/Users/UserThank';

export default withRouter(function ShowUsers(Props) {


    let myUsersFromServer,myUser, myAddUser,myUppUser,myDeleteUser,cnt;
    const [userList,setUserList]=useState ([])
    const [unV,setunV] = useState({})
 const dispatch = useDispatch();



    useEffect(async () => {
       
        myUsersFromServer = await getAllUsersFromserver(dispatch);
        await setUserList(myUsersFromServer)
         cnt = await getUnV(dispatch); 
         await setunV(cnt);


    }, [])
  async function MemberDetails(id){
   
   
    if(id>0){
      Props.history.push(`/MemberDetails/${id}`)

    }
  }
    return <>
    <div>
      <NavLink style={{ "fontFamily": "Helvetica", fontSize: "1.5rem" }} to={`/n/${unV}`}>עדיין לא כולם מחוסנים 
      <br></br>
      לצפיה בכמות החברים שאינם מחוסנים 
      <span style={{ fontWeight: 'bold' }}>
      לחץ כאן
      </span>
      </NavLink>

<table class="table" style={{margin:"40px 0", background:'lightgray'}}>
  <thead class="black white-text">
    <tr>
      <th scope="col">שם</th>
      <th scope="col">שם משפחה</th>
      <th scope="col">ת"ז</th>
      <th scope="col">כתובת</th>
      <th scope="col">עיר</th>
      <th scope="col">ת.לידה</th>
      <th scope="col">פלאפון</th>
      <th scope="col">טלפון</th>
      <th scope="col">פירוט חיסונים</th>
      <th scope="col">עדכון </th>
      <th scope="col">מחיקה </th>


    </tr>
  </thead>
  
  <tbody>
  {userList.map((x) =>
    <tr>
      <td>{x.memberName}</td>
      <td>{x.memberLastName}</td>
      <td>{x.memberID}</td>
      <td>{x.memberAdress}</td>
      <td>{x.memberCity}</td>
     {    new Date(x.memberBirthDate).toLocaleDateString()!="1.1.1"?

     <td>{new Date(x.memberBirthDate).toLocaleDateString()}</td>
  :
  <td></td>

  }
     <td>{x.memberTel}</td>
      <td>{x.memberPhone}</td>
     <td onClick={() => MemberDetails(x.memberID)}><MDBBtn style={{background:"gray"}} rounded size="sg">לפרטים מלאים </MDBBtn></td>
     <td onClick={() =>       Props.history.push(`/sign/${x.memberID}`)}><MDBBtn style={{background:"gray"}} rounded size="sg">עדכון  </MDBBtn></td>
     <td onClick={() =>{ RemoveUser(dispatch, x.memberID);       Props.history.push("/users")}}><MDBBtn style={{background:"red"}} rounded size="sg"> <i class="fas fa-trash-alt"></i> </MDBBtn></td>


    </tr>
    )}
  </tbody>
</table>
</div>


        </>
})

 
 
