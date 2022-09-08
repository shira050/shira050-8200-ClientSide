import React, { Component } from "react";
import { MDBBtn, MDBFile } from 'mdb-react-ui-kit';
import { MDBNavbarLink } from 'mdb-react-ui-kit';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import { MDBContainer } from "mdbreact";
import { MDBAlert } from "mdbreact";
import { NavLink } from "react-router-dom";
import { getPictureByCode } from "../Redax/Picturs/PictursThank";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ImageUploading from 'react-images-uploading';
import { useEffect } from "react";
import { getAllKategoriesFromserver } from "../Redax/Kategories/KategoriesThank";
import { AddPicture } from "../Redax/Picturs/PictursThank";
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { getAllCountingFromserver } from "../Redax/Picturs/PictursThank";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import { MDBSpinner } from "mdb-react-ui-kit";
export default withRouter(function NewGame(codePicture) {
  const [k,setk]=useState();
  const [c,setC]=useState();
  const [spiner, setSpiner] = useState(false);
  const [upload, setUpload] = useState(true);
  const dispatch = useDispatch();
  const U = useSelector((store) => { return store.users.user });
  const [PictureList, setPictureList] = useState([]);
  const [KategoryList, setKategoryList] = useState([]);
  const [myFile, setMyfile] = useState();
  const [myCounting, setCounting] = useState([]);
  const [input, setInput] = useState(false);
  let myAllKategories, myCodeForAddPicture, myAllCounting;
  useEffect(async () => {
    myAllKategories = await getAllKategoriesFromserver(dispatch);
    await setKategoryList(myAllKategories);
    myAllCounting = await getAllCountingFromserver(dispatch);
    await setCounting(myAllCounting);

  })

  const [a1, seta1] = useState(0), [d, set_d] = useState(0);
  
  const MakeGame = async (event) => {
    setSpiner(true);
    //  console.log(myFile.name)
    debugger
    if (U.codeUser == "") {
      debugger;
      alert("על מנת להוסיף פרטים עליך להירשם או להיכנס אם יש לך חשבון כבר");
      codePicture.history.push("/sign_in");

    }
    else if (myFile == null) {
      alert("יש לבחור קובץ");
      setSpiner(false);
    }
    else {
      try {
debugger
        //העלאת תמונה לשרת
        const formData = new FormData();
        formData.append('file', myFile, myFile.name);
        await axios.post("http://localhost:26064/api/PictureControler/upload", formData, { reportProgress: true, observe: 'events' }).
          then(x => {
            console.log(x);

          })
          

          //  try {
            debugger
            console.log(c+k);
            const PicturePromise = axios.post("http://localhost:26064/api/ImageProccessControler/newGame?codeCounting=" + c + "&a1=" + a1 + "&d=" + d + "&name=" + myFile.name);
            const response = await PicturePromise;
             const Picture = response.data;
            debugger
  
            //הוספה לרשימה
            debugger
          debugger
            if(Picture!=0){
            debugger
            myCodeForAddPicture = await AddPicture(dispatch, U.codeUser, k, 0, myFile.name, " חידון " + myFile.name, c);
            await setPictureList(myCodeForAddPicture);
            debugger
            alert("המוצר נוסף בהצלחה");
            setSpiner(false);
            debugger
            // codePicture.history.push(`/onePicture/${PictureList[PictureList.length()-1]}`)
          }
        else{
          alert(
            "מספר האיברים בתמונה גדול מ1"
            )
          setSpiner(false);
        }
      // }
  
      //     catch (e) {
      //       alert(
      //         "בדוק שמספר האיברים בתמונה לא גדול מ1 אך ייתכן ואירעה שגיאה אנא נסה שנית"
      //         )
      //       setSpiner(false);
  
      //     }
         }
      catch (e) {
        setUpload(false);
        alert(
          "קיימת תמונה באותו השם"
        )
        setSpiner(false);
      }
      debugger;
     
  }}

  const UppdatePicture = async (dispatch, codePicture, codeUser, codeKategory, uppDateToWeb, cascadingPicture, routeSoursePicture, routeGoalPicture, codeCounting) => {
    const uppP = { codePicture: 0, codeUser: codeUser, codeKategory: codeKategory, uppDateToWeb: null, cascadingPicture: cascadingPicture, routeSoursePicture: routeSoursePicture, routeGoalPicture: routeGoalPicture, codeCounting: codeCounting };
    const PicturePromise = axios.put(PicturesURL + "/UppdatePicture/" + codePicture, uppP);
    const response = await PicturePromise;
    const Picture = response.data;
    dispatch(uppdatePicture(Picture));
    return Picture;


  }


  //  codePicture.history.push("/oops");
  // codePicture.history.push(`/game/${1}`)
  // }








  const uploadFile = (e) => {
    setMyfile(e.target.files[0]);

  }
  const showInput = (e) => {

    // {for(var i=0;i<e.target.lengh;i++)
    //   if(e.target[i].selected==true)
    //   setCount(e.target[i].value);
    //   }
    // setCount(e.target.value);
    setC(e.target.value);
    debugger
    if (e.target.value == 4 || e.target.value == 5 || e.target.value == 6)
      setInput(true)

    else
      setInput(false)
  }

  return (<>


    <div>
      {spiner == true ?
        <div
          className='p-5 text-center bg-image'
          style={{ margin: "35px 50px", backgroundImage: "url('https://i.pinimg.com/originals/38/4b/a3/384ba3c66b36556ceddaa15a9a567da9.gif')", height: 400,backgroundColor: 'rgba(0, 0, 0, 0.5)'   }}
        > 
          <div style={{ margin: "auto", width: "80%", height: "30%"}} id="gfg">
            <h2>נטען...</h2>
            <h4>אנו מכינים לך את המשחק</h4>

            {/* <MDBSpinner color='success' role='status'>
            </MDBSpinner> 
             <br />
            <MDBSpinner color='danger' grow>
            </MDBSpinner> */}
          </div></div>
        :
        <div
          className='p-5 text-center bg-image'
          style={{ margin: "35px 50px", backgroundImage: "url('https://i.gifer.com/ENTw.gif')", height: 500, backgroundRepeat: "no-repeat" }}
        >
          <div  className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>

                <MDBAnimation type="fadeInLeft" delay=".3s">

                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    בחר תמונה למשחק
                  </h1>

                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    על התמונה להיות מסוג
                    jpg
                    ובעלת עצמים ברורים על מנת שהתוצאה תצא טובה יותר
                  </h6>

                  <MDBBtn color="white" className='btn btn-outline-light btn-lg'>  <MDBFile style={{ width: "100%" }} accept=".jpg" onChange={(event) => { uploadFile(event) }} />
                  </MDBBtn>
                  <hr></hr>
                  <MDBBtn color="white" style={{ margin: "0px 10px" }}>
                    <label htmlFor="defaultFormEmailEx" >בחר בקטגורייה המתאימה

                    </label>


                    <select class="form-control" onChange={(e) => {

                      debugger
                     setk (e.target.value);
                      debugger
                    }}>

                      {KategoryList.map((x) => (
                        <option value={x.codeKategory}    >{x.nameKategory}</option>
                      ))}
                    </select>
                  </MDBBtn>


                  <MDBBtn color="white" >
                    <label htmlFor="defaultFormEmailEx" >בחר בשיטת המספור הרצויה

                    </label>


                    <select class="form-control" onChange={(event) => showInput(event)} >

                      {myCounting.map((x) => (
                        <option value={x.codeCounting} id="codeCounting"
                        >{x.nameCounting}</option>))
                      }
                    </select>
                    {input == true &&
                      <>
                        <input id="a1" type="number" placeholder="הכנס איבר ראשון בסדרה" onChange={() => { seta1(document.getElementById("a1").value); debugger; }}></input>
                        <input id="d" type="number" placeholder="הכנס את הפרש הסדרה" onChange={() => { set_d(document.getElementById("d").value); debugger }}></input>
                      </>
                    }
                  </MDBBtn>
                  <hr></hr>

                  <MDBBtn className='btn btn-outline-light btn-lg' color="gray" onClick={(event) => MakeGame(event)}>  הפוך למשחק</MDBBtn>


                </MDBAnimation>

              </div>
            </div>
          </div>

        </div>


      }
    </div>







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
