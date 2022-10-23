import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { UppdateMemberKoronaDetails } from '../Redax/Users/UserThank';

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
import { useState } from 'react';
import { getUserFromserverBynameAndPass, getUserDetails, UppdateUser } from '../Redax/Users/UserThank';
import { useDispatch } from 'react-redux';
import { uppdateUser } from '../Redax/Users/UserAction';
import { NavLink } from 'react-router-dom';




export default function UpdateKoronaDetails(Props) {
  const dispatch = useDispatch();
  const [m, setM] = useState();
  const [userDetails, setUserDetails] = useState({ memberID: "", vaccination1Date: null, vaccination2Date: null, vaccination3Date: null, vaccination4Date: null, vaccination1manufacturer: "", vaccination2manufacturer: "", vaccination3manufacturer: "", vaccination4manufacturer: "", memberSickDate: null, memberRecoveryDate: null });

  const [sick, setSick] = useState();
  const [memberRecoveryDate, setMemberRecoveryDate] = useState();
  const [v1, setV1] = useState();
  const [v2, setV2] = useState();
  const [v3, setV3] = useState();
  const [v4, setV4] = useState();
  const [m1, setM1] = useState();
  const [m2, setM2] = useState();
  const [m3, setM3] = useState();
  const [m4, setM4] = useState();
  let p, i;


  const validDate = (d1, d2) => {
    var date = new Date();
    
  
if(d1=="0001-01-01T00:00:00"||d2=="0001-01-01T00:00:00"||d1==null||d2==null||d1==""||d2=="")
return true
else{
  var d1 = new Date(d1);
  var d2 = new Date(d2);
    if (d2.getFullYear() < d1.getFullYear() || d2.getFullYear() > date.getFullYear() || d1.getFullYear() > date.getFullYear())
      return false
    else {
if(d2.getFullYear()>d1.getFullYear()&&d2.getFullYear()<=date.getFullYear()) 
return true;
      if (d2.getFullYear() === d1.getFullYear()&&d2.getFullYear() <= date.getFullYear()) {
        if (d2.getMonth() < d1.getMonth() )
          return false;
        else {
          if (d2.getMonth() === d1.getMonth()) {

            if (d2.getDate() > d1.getDate())
              return true;

          }
          else {
            return true;
          }
        }
      }
    }
  }
  }

const validDates=()=>{
  debugger
  let d1=v1;
  if(d1=='0001-01-01T00:00:00'||d1==null)
  d1=document.getElementById("va1").value;

  let d2=v2;
  if(d2=='0001-01-01T00:00:00'||d2==null)
  d2=document.getElementById("va2").value;

  let d3=v3;
  if(d3=='0001-01-01T00:00:00'||d3==null)
  d3=document.getElementById("va3").value;

  let d4=v4;
  if(d4=='0001-01-01T00:00:00'||d4==null)
  d4=document.getElementById("va4").value;

if( validDate(d1,d2)==true && d2!="0001-01-01T00:00:00"&& d1!="0001-01-01T00:00:00")
{
 if(validDate(d2,d3)==true && d3!="0001-01-01T00:00:00"){
  if(validDate(d3,d4)==true && d4!="0001-01-01T00:00:00")
  {
    UppdateMemberKoronaDetails(Props.match.params.id, userDetails.vaccination1Date, userDetails.vaccination2Date, userDetails.vaccination3Date, userDetails.vaccination4Date, userDetails.vaccination1manufacturer, userDetails.vaccination2manufacturer, userDetails.vaccination3manufacturer, userDetails.vaccination4manufacturer, userDetails.memberSickDate, userDetails.memberRecoveryDate)

}


}
}
else
alert("בדוק את סדר התאריכים")}

  useEffect(async () => {
    p = await getUserDetails(dispatch, Props.match.params.id);
    setM(p);


    i = p.vaccination1Date;
    setV1(i);
// if(v1!="1970-01-01T00:00:00")
// setUserDetails({...userDetails,vaccination1Date:v1})

    i = p.vaccination2Date;
    setV2(i);
    // if(v2!="1970-01-01T00:00:00")
    // setUserDetails({...userDetails,vaccination2Date:v2})

    i = p.vaccination3Date;
    setV3(i);
//     if(v3!="1970-01-01T00:00:00")
// setUserDetails({...userDetails,vaccination3Date:v3})

    i = p.vaccination4Date;
    setV4(i);
//     if(v4!="1970-01-01T00:00:00")
// setUserDetails({...userDetails,vaccination4Date:v1})

    i = p.vaccination1manufacturer;
    setM1(i);
//     if(m1!="")
// setUserDetails({...userDetails,vaccination1manufacturer:m1})

    i = p.vaccination2manufacturer;
    setM2(i);
    // if(m2=="")
    // setUserDetails({...userDetails,vaccination2manufacturer:m2})

    i = p.vaccination3manufacturer;
    setM3(i);
    // if(m3=="")
    // setUserDetails({...userDetails,vaccination3manufacturer:m3})

    i = p.vaccination4manufacturer;
    setM4(i);
    // if(m4=="")
    // setUserDetails({...userDetails,vaccination4manufacturer:m4})

    i = p.memberSickDate;
    setSick(i);
    // if(sick!="1970-01-01T00:00:00")
    // setUserDetails({...userDetails,memberSickDate:sick})

    i = p.memberRecoveryDate;
    setMemberRecoveryDate(i);
    // if(memberRecoveryDate!="1970-01-01T00:00:00")
    // setUserDetails({...userDetails,memberRecoveryDate:memberRecoveryDate})

  })


  return (

    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">


        <MDBRow>
          <MDBRow>
            <MDBCol lg="5">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">


                  <MDBCardImage
                    src="https://www.petah-tikva.muni.il/PublishingImages/%D7%97%D7%99%D7%A1%D7%95%D7%A0%D7%99%D7%9D%20%D7%95%D7%91%D7%93%D7%99%D7%A7%D7%95%D7%AA_%D7%9B%D7%95%D7%AA%D7%A8%D7%AA.jpg"

                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />

                  <p className="text-muted mb-1">{Props.match.params.id}</p>

                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn outline className="ms-1" onClick={() => { debugger; validDates() }} >  עדכון פרטים</MDBBtn>

                  </div>
                </MDBCardBody>
              </MDBCard>


            </MDBCol>

            <MDBCol lg="6">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>חיסון #1</MDBCardText>
                    </MDBCol>
                    {m1 != "" && m1 != null ?
                      <MDBCol sm="5">
                        <MDBCardText className="text-muted">{m1}</MDBCardText>
                      </MDBCol>
                      :
                      <MDBCol sm="5">
                        <MDBCardText className="text-muted"><input  value={userDetails.vaccination1manufacturer} type="text" onChange={(e) => { setUserDetails({ ...userDetails, vaccination1manufacturer: e.target.value }) }} />הכנס חברה מייצרת</MDBCardText>
                      </MDBCol>}
                    {v1 != "0001-01-01T00:00:00" ?
                      <MDBCol sm="4">
                        <MDBCardText className="text-muted" >{new Date(v1).toLocaleDateString()}</MDBCardText>
                      </MDBCol> :

                      <MDBCol sm="4">
                        <MDBCardText className="text-muted"><input id="va1" value={userDetails.vaccination1Date} type="date" onChange={(e) => { debugger; setUserDetails({ ...userDetails, vaccination1Date: e.target.value }) }} />הכנס תאריך</MDBCardText>
                      </MDBCol>}
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>חיסון#2</MDBCardText>
                    </MDBCol>
                    {m2 != "" && m2 != null ?
                      <MDBCol sm="5">
                        <MDBCardText className="text-muted">{m2}</MDBCardText>
                      </MDBCol>
                      :
                      <MDBCol sm="5">
                        <MDBCardText className="text-muted"><input value={userDetails.vaccination2manufacturer} type="text" onChange={(e) => { setUserDetails({ ...userDetails, vaccination2manufacturer: e.target.value }) }} />הכנס חברה מייצרת</MDBCardText>
                      </MDBCol>}
                    {v2 != "0001-01-01T00:00:00" ?
                      <MDBCol sm="4">
                        <MDBCardText className="text-muted" >{new Date(v2).toLocaleDateString()}</MDBCardText>
                      </MDBCol> :
                      <MDBCol sm="4">
                        <MDBCardText className="text-muted"><input id="va2" value={userDetails.vaccination2Date} type="date" onChange={(e) => { setUserDetails({ ...userDetails, vaccination2Date: e.target.value }) }} />הכנס תאריך</MDBCardText>
                      </MDBCol>}
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>חיסון#3</MDBCardText>
                    </MDBCol>
                    {m3 != "" && m3 != null ?
                      <MDBCol sm="5">
                        <MDBCardText className="text-muted">{m3}</MDBCardText>
                      </MDBCol>
                      :
                      <MDBCol sm="5">
                        <MDBCardText className="text-muted"><input value={userDetails.vaccination3manufacturer} type="text" onChange={(e) => { setUserDetails({ ...userDetails, vaccination3manufacturer: e.target.value }) }} />הכנס חברה מייצרת</MDBCardText>
                      </MDBCol>}
                    {v3 != "0001-01-01T00:00:00" ?
                      <MDBCol sm="4">
                        <MDBCardText className="text-muted" >{new Date(v3).toLocaleDateString()}</MDBCardText>
                      </MDBCol> :
                      <MDBCol sm="4">
                        <MDBCardText className="text-muted"><input id="va3" value={userDetails.vaccination3Date} type="date" onChange={(e) => { setUserDetails({ ...userDetails, vaccination3Date: e.target.value }) }} />הכנס תאריך</MDBCardText>
                      </MDBCol>}
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>חיסון#4</MDBCardText>
                    </MDBCol>
                    {m4 != "" && m4 != null ?
                      <MDBCol sm="5">
                        <MDBCardText className="text-muted">{m4}</MDBCardText>
                      </MDBCol>
                      :
                      <MDBCol sm="5">
                        <MDBCardText className="text-muted"><input value={userDetails.vaccination4manufacturer} type="text" onChange={(e) => { setUserDetails({ ...userDetails, vaccination4manufacturer: e.target.value }) }} />הכנס חברה מייצרת</MDBCardText>
                      </MDBCol>}
                    {v4 != "0001-01-01T00:00:00" ?
                      <MDBCol sm="4">
                        <MDBCardText className="text-muted" >{new Date(v4).toLocaleDateString()}</MDBCardText>
                      </MDBCol> :
                      <MDBCol sm="4">
                        <MDBCardText className="text-muted"><input id="va4" value={userDetails.vaccination4Date} type="date" onChange={(e) => { setUserDetails({ ...userDetails, vaccination4Date: e.target.value }) }} />הכנס תאריך</MDBCardText>
                      </MDBCol>}
                  </MDBRow>

                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">האם חליתי בעבר?</span> </MDBCardText>
                      {sick != "0001-01-01T00:00:00" && sick != null ?
                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>כן בתאריך{new Date(sick).toLocaleDateString()}</MDBCardText>
                        : <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>
                          <input value={userDetails.memberSickDate} type="date" onChange={(e) => { setUserDetails({ ...userDetails, memberSickDate: e.target.value }) }} />הכנס תאריך לגילוי תוצאה חיובית

                        </MDBCardText>}



                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                {sick != "0001-01-01T00:00:00" && sick != null &&
                  <MDBCol md="6">
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody>
                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">האם יש לי בדיקה שלילית שמראה שהבראתי?</span> </MDBCardText>
                        {memberRecoveryDate == "0001-01-01T00:00:00" &&
                          <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>
                            <input value={userDetails.memberRecoveryDate} type="date" onChange={(e) => { setUserDetails({ ...userDetails, memberRecoveryDate: e.target.value }) }} />הכנס תאריך לגילוי תוצאה שלילית

                          </MDBCardText>
                        }

                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>}
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}