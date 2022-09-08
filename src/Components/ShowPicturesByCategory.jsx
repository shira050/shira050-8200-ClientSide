import { GetAllPicturesInKategory } from '../Redax/Picturs/PictursThank';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import {MDBCardHeader, MDBCardFooter, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBRow, MDBIcon } from 'mdbreact';
import {getAllKategoriesFromserver,getKategoryByCode, AddKategory,UppdateKategory,RemoveKategory} from '../Redax/Kategories/KategoriesThank';
import { useEffect } from 'react';
import ShowPictures from './ShowPictures';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
export default withRouter(function ShowPicturesByKategory(Props){

  const [KategoryList,setKategoryList]=useState ([]);
  const [PicturesInOneKategory, setPicturesInOneKategory] = useState([]);
    const dispatch = useDispatch();
    const M = useSelector((store) => {return store.users.isMenneger });

    let myKategoriesFromServer,myKategory,myRemoveKategory,myAddKategory,myUPPKategory;
  useEffect(async () => { 
    
   myKategoriesFromServer = await getAllKategoriesFromserver(dispatch);
    await setKategoryList(myKategoriesFromServer);
  },[]) 
  
  const PicKategory=async(dispatch,codeKategory) =>{
    debugger

Props.history.push(`/Pictures/${codeKategory}`)
  return;
}
const addC=async()=>
{
  myAddKategory = await AddKategory(dispatch,document.getElementById("KategoryName").value,null);
   await setKategoryList(myAddKategory);
   document.getElementById("KategoryName").value="";
}
const deletC = async () => {
  let i = 0;
  debugger
  const codeC=document.getElementById("KategoryCodeToDelete").value;
   try{
     debugger
     myRemoveKategory = await RemoveKategory(dispatch,codeC);
    await setKategoryList(myRemoveKategory);
  alert("הקטגוריה נמחקה בהצלחה!");
  document.getElementById("KategoryCodeToDelete").value="";
 }
  catch{
  //   if(codeC==43)
  //   alert("ניסית למחוק ערך ברירת מחדל eror-")
  //  else 
    alert(" נראה שהקטגוריה איננה בדוק את הקוד שהזנת....");
  }
 
}
const uppKategory=async(code)=>
{
  myKategory = await getKategoryByCode(dispatch,code);

 let n= prompt("הכנס שם");
 if(n){
   myUPPKategory = await UppdateKategory(dispatch,code,n);
    await setKategoryList(myUPPKategory);
 }
 


 
}
    return(
     
      <div >


  {/* --------------------------------------כפתור הוספת  ומחיקת קטגוריה'------------------------------------------------------------------------- */}
  {(M == 1) &&
          <div>
            <MDBCard id='add' className="my-5 px-5 pb-5" style={{ margin: '10px 23%', background: 'lightsteelblue' }}>
              <MDBIcon size='2x' icon="bookmark" className='ms-1' /><MDBCardHeader>אפשרויות מנהל:</MDBCardHeader>
              <MDBCardBody className="text-center">
                <MDBCard alignment='center' style={{ display: 'block', maxWidth: '20rem', float: 'right', margin: "10px 1%" }}>
                  <MDBIcon size='2x' icon="plus" />
                  <MDBCardHeader>הוסף קטגוריה</MDBCardHeader>
               

            <MDBCardBody>
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                הכנס שם קטגורייה
              </label>
              <input
                type="text"
                id="KategoryName"
                className="form-control"
              ></input>
               
              <MDBBtn outline onClick={() => addC()} >הוסף</MDBBtn>
            </MDBCardBody>



              
                </MDBCard>

                <MDBCard alignment='center' style={{ display: 'block', maxWidth: '20rem', float: 'right' ,margin: "10px 1%" }}>
                  <MDBIcon size='2x' icon="minus" />
                  <MDBCardHeader>מחק קטגורייה</MDBCardHeader>
<MDBCardBody>
<label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                הכנס קוד קטגוריה למחיקה
              </label>
              {/* <label> שים לב:  מחיקת קטגוריייה תשנה את הערך "קוד קטגורייה" בתמונות  לערך ברירת מחדל(43)</label> */}
              <input
                type="text"
                id="KategoryCodeToDelete"
                className="form-control"
              ></input>
<MDBBtn outline onClick={() => deletC()} >מחק</MDBBtn>
           

              </MDBCardBody>
            </MDBCard>
            </MDBCardBody>
            </MDBCard>
          </div>
        }


{ KategoryList.map((x)=>(

<MDBCol md='4' style={{maxWidth:'30%', float:'right',margin:'30px 1%'}}>

<MDBCard
  className='card-image'
  style={{
     backgroundImage:'url(https://www.misgeret.co.il/Pics/misgeret-modern/332540-1793-15-08-19-L.jpg)',
    //backgroundImage:'url(http://localhost:26064/images/unnamed.jpg)',
    // backgroundImage:'url(http://localhost:26064/images/%D7%A8%D7%A7%D7%A2%20%D7%9E%D7%A4%D7%95%D7%A1%D7%A4%D7%A1%20%D7%AA%D7%95%D7%A8%D7%A7%D7%99%D7%96.jpg)',

    backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      
    }}
>
  <div className='text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
    <div style={ {color:'black'}}>
     <MDBCardText> קוד קטגורייה:{x.codeKategory}</MDBCardText>
      <MDBCardTitle tag='h3' className='pt-2' style={{ color:"black"}}>
        <strong > {x.nameKategory} </strong>
      </MDBCardTitle>
      <MDBBtn color='deep-orange'>
        <NavLink onClick={()=>PicKategory(dispatch,x.codeKategory)}  icon='clone left' to={`/Pictures/${x.codeKategory}`} > צפה בתמונות</NavLink>
      </MDBBtn>
      {(M == 1)&&
      <MDBBtn onClick={()=>uppKategory(x.codeKategory)} >לעדכון לחץ כאן</MDBBtn>}
    </div>
  </div>
</MDBCard>
</MDBCol>

))
  } 
   
  



</div>)







})


// {(M == 1)&&
//   <div>
// <MDBCard alignment='center' style={{ display: 'block', maxWidth: '22rem', float: 'right', margin: "20px 20px" }}>
//           <MDBCardHeader>מחק קטגורייה</MDBCardHeader>
// <MDBCardBody>
// <label
//               htmlFor="defaultFormEmailEx"
//               className="grey-text font-weight-light"
//             >
//               הכנס קוד קטגוריה למחיקה
//             </label>
//             {/* <label> שים לב:  מחיקת קטגוריייה תשנה את הערך "קוד קטגורייה" בתמונות  לערך ברירת מחדל(43)</label> */}
//             <input
//               type="text"
//               id="KategoryCodeToDelete"
//               className="form-control"
//             ></input>
// <MDBBtn outline onClick={() => deletC()} >מחק</MDBBtn>
//           </MDBCardBody>
// </MDBCard>
// <MDBCard alignment='center' style={{ display: 'block', maxWidth: '22rem', float: 'right', margin: "20px 20px" }}>
        
        
//           <MDBCardHeader>הוסף קטגוריה</MDBCardHeader>
//           <MDBCardBody>
//             <label
//               htmlFor="defaultFormEmailEx"
//               className="grey-text font-weight-light"
//             >
//               הכנס שם קטגורייה
//             </label>
//             <input
//               type="text"
//               id="KategoryName"
//               className="form-control"
//             ></input>
//              {/* <label
//               htmlFor="defaultFormEmailEx"
//               className="grey-text font-weight-light"
//             >
//              הכנס כתובת תמונה
//             </label>
//             <input
//               type="text"
//               id="KategoryPic"
//               className="form-control"
//             ></input> */}
//             <MDBBtn outline onClick={() => addC()} >הוסף</MDBBtn>
//           </MDBCardBody>
// </MDBCard>
// </div>
// }
  
   