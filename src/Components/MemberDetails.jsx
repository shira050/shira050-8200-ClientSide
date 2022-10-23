import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
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
import V1 from './V1';

export default function MemberDetails(id) {
  const dispatch = useDispatch();
  const [m, setM] = useState();
  const [myFile, setMyfile] = useState();

const [sick,setSick]=useState();
const[memberRecoveryDate,setMemberRecoveryDate]=useState();
const [v1,setV1]=useState();
const [v2,setV2]=useState();
const [v3,setV3]=useState();
const [v4,setV4]=useState();
const [m1,setM1]=useState();
const [m2,setM2]=useState();
const [m3,setM3]=useState();
const [m4,setM4]=useState();
  let p,i;
  useEffect(async () => {
     p = await getUserDetails(dispatch, id.match.params.id);
     setM(p);
     i=p.imge;
     setM(i);
     i=String( p.vaccination1Date);
     setV1(i);
     i=p.vaccination2Date;
     setV2(i); 
     i=p.vaccination3Date;
     setV3(i);
     i=p.vaccination4Date;
     setV4(i);
     i=p.vaccination1manufacturer;
     setM1(i);
     i=p.vaccination2manufacturer;
     setM2(i);
     i=p.vaccination3manufacturer;
     setM3(i);
     i=p.vaccination4manufacturer;
     setM4(i);
     i=p.memberSickDate;
     setSick(i);
     i=p.memberRecoveryDate;
     setMemberRecoveryDate(i);
    




   
  })
  const uploadFile = (e) => {
    setMyfile(e.target.files[0]);

  }
  const saveImge = async (event) => {
   
     if (myFile == null) {
      alert("יש לבחור קובץ");
    }
    else {
      try {

        //העלאת תמונה לשרת
        const formData = new FormData();
        formData.append('file', myFile, myFile.name);
        await axios.post("https://localhost:44337/upload", formData, { reportProgress: true, observe: 'events' }).
          then(x => {
            // console.log(x);

          })
          

           try {
            debugger
            const PicturePromise = axios.put("https://localhost:44337/UppdateMemberProfile/" + id.match.params.id + "/" +  myFile.name+"/");
            const response = await PicturePromise;
             const Picture = response.data;
            debugger
  
          
            alert("פרופיל עודכן בהצלחה");
            debugger
          }
      
    
     
  
      catch (e) {
        alert(
"שגיאה"        )
      }
      // debugger;
     
  }
catch{

}
}}
  return (
  
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="5">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">

                {m==null?
                <MDBCardImage
                  src="data:image/jpeg;base64,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"
                 
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                :
                  <MDBCardImage
                  src={`https://localhost:44337//images/${m}`}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />} 
                <p className="text-muted mb-1">חבר בקופ"ח</p>
                <p className="text-muted mb-1">{id.match.params.id}</p>

                <div className="d-flex justify-content-center mb-2">
                <NavLink to={`/UpdateKoronaDetails/${id.match.params.id}`} >  <MDBBtn outline className="ms-1" >עדכון פרטים</MDBBtn></NavLink>
                  <MDBBtn outline className="ms-1"><MDBFile  onChange={(event) => { uploadFile(event) }}/>החלף תמונה</MDBBtn>
                <MDBBtn outline className="ms-1" onClick={(event) => { saveImge(event) }}>שמור תמונה</MDBBtn>

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
                  <MDBCol sm="5">
                    <MDBCardText className="text-muted">{m1}</MDBCardText>
                  </MDBCol>
                  {v1!= "0001-01-01T00:00:00" ?
                    <MDBCol sm="4">
                      <MDBCardText className="text-muted"><i class="fas fa-check"></i></MDBCardText>
                    </MDBCol> :
                    
                    <MDBCol sm="4">
                      <MDBCardText className="text-muted"><i class="fas fa-times"></i></MDBCardText>
                    </MDBCol>}
                </MDBRow>
                <hr />
               <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>חיסון#2</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="5">
                    <MDBCardText className="text-muted">{m2}</MDBCardText>
                  </MDBCol>
                  {v2!= "0001-01-01T00:00:00" ?
                    <MDBCol sm="4">
                      <MDBCardText className="text-muted"><i class="fas fa-check"></i></MDBCardText>
                    </MDBCol> :
                    <MDBCol sm="4">
                      <MDBCardText className="text-muted"><i class="fas fa-times"></i></MDBCardText>
                    </MDBCol>}
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>חיסון#3</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="5">
                    <MDBCardText className="text-muted">{m3}</MDBCardText>
                  </MDBCol>
                  {v3 != "0001-01-01T00:00:00" ?
                    <MDBCol sm="4">
                      <MDBCardText className="text-muted"><i class="fas fa-check"></i></MDBCardText>
                    </MDBCol> :
                    <MDBCol sm="4">
                      <MDBCardText className="text-muted"><i class="fas fa-times"></i></MDBCardText>
                    </MDBCol>}
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>חיסון#4</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="5">
                    <MDBCardText className="text-muted">{m4}</MDBCardText>
                  </MDBCol>
                  {v4 != "0001-01-01T00:00:00" ?
                    <MDBCol sm="4">
                      <MDBCardText className="text-muted"><i class="fas fa-check"></i></MDBCardText>
                    </MDBCol> :
                    <MDBCol sm="4">
                      <MDBCardText className="text-muted"><i class="fas fa-times"></i></MDBCardText>
                    </MDBCol>} 
                </MDBRow>

              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">האם חליתי בעבר?</span> </MDBCardText>
                    {sick != "0001-01-01T00:00:00"&&sick!=null ?
                      <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>כן בתאריך{sick}</MDBCardText>
                      : <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>לא</MDBCardText>}



                  </MDBCardBody>
                </MDBCard>
              </MDBCol> 

              {sick != "0001-01-01T00:00:00"&&sick!=null &&
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">האם הבראתי?</span> </MDBCardText>
                      {memberRecoveryDate != "0001-01-01T00:00:00" ?
                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>כן בתאריך{memberRecoveryDate}</MDBCardText>
                        : <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>לא אני עדיין חולה</MDBCardText>}


                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>} 
            </MDBRow>
          </MDBCol>
        </MDBRow> 
      </MDBContainer>
    </section>
  );
        }