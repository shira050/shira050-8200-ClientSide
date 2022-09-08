import { useSelector, useDispatch } from 'react-redux';
import SignIn from './SignIn';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch, Router } from 'react-router-dom';
import ShowPictures from './ShowPictures';
import ShowPicturesByCategory from './ShowPicturesByCategory';
import { isMenneger } from '../Redax/Users/UserAction';
import { useState } from 'react/cjs/react.development';

import Nav2 from './Nav2';
export default function Main() {
const dispatch=useDispatch();

const userName=useSelector((store) => { return store.users.user.userName })
  return <>
   
      <div style={{display:'inline-block' ,background:'lightgray',width:'100%',margin:'auto'}}>
      {/* <TheNav></TheNav> */}
      <Nav2></Nav2>
      
      </div>
             <h1>שלום {userName}</h1>
       <div style={{display:'block',height:'200px',padding:"0px 3%"}}> <p>
        אתר זה מכיל משחקי קו לקו מהנים ומלמדים אשר יוסיפו עניין וחוויה לשעות פעילות אצל הילדים.
        <br></br>
        משחק קו לקו הוא פשוט ביותר:
        <br></br>
        כל תמונה באתר מורכבת מאוסף נקודות,
        <strong>
        המשחק 
       צריך להתחיל בנקודה הראשונה ולעבור את המסלול עד לנקודה האחרונה.
        כשיגיע לנקודת הסיום תתגלה בפניו התמונה השלימה שהוא צייר במעבר על הנקודות
        </strong>
        </p>
        <p  style={{display:'block',height:'200px'}}>
         משחק זה, מלבד היותו משחק מהנה וקליל הוא אף מלמד בצורה קלילה ונוחה את הילד : מספרים ,אותיות בעברית,אותיות באנגלית,סדרות,כפולות וכו' 
       <br></br>
        כל מה שעליך לעשות הוא לבחור את התמונה הרצויה מהמאגר הנתון, ממחשבך האישי או כל מקום אחר ולבחור את אופציית הסימון(A-B,א-ב,1-2,2-4......)
     <br></br>
       המערכת מאחלת לך המון הנאה!!
        </p></div>
   

  
  </>

}
