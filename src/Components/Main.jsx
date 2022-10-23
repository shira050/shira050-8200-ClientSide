import { useSelector, useDispatch } from 'react-redux';
import SignIn from './SignIn';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch, Router } from 'react-router-dom';

import { useState } from 'react/cjs/react.development';

import Nav2 from './Nav2';
export default function Main() {
const dispatch=useDispatch();

const userName=useSelector((store) => { return store.users.user.memberName })
  return < div style={{background:"#f1f1f1"}}>
   
      <div style={{display:'inline-block' ,width:'100%',margin:'auto'}}>
      {/* <TheNav></TheNav> */}
      <Nav2></Nav2>
      
      </div>
             <h1 >שלום {userName}</h1>
       <div style={{display:'block',height:'200px',padding:"0px 3%"}}> <p>
       קופת חולים (קופ"ח) היא ארגון המעניק
        שירותי בריאות לעמיתיו, על ידי ביטוח בריאות, עובדי בריאות 
        ומתקנים השייכים לו או מצויים בהסדר עמו. 
        <br></br>
        לרוב, תהיה
        קופת החולים איגוד בעל מאפיינים קואופרטיביים וללא כוונת רווח,
        <br></br>
         אולם זה אינו תנאי וקיימות קופות חולים
        
         פרטיות וקופות חולים שהן חברות מסחריות.       
       </p></div>
       
   

  
  </div>

}
