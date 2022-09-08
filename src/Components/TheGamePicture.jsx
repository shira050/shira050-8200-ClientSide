import React from 'react';
import { MDBCard, MDBCardTitle,MDBCardFooter, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { useState } from 'react/cjs/react.development';
import { getPictureByCode } from '../Redax/Picturs/PictursThank';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MDBCardImage } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import axios from 'axios';
import  ImageGrid  from  "react-image-grid-animator";
import MyCard from "react-image-grid-animator";
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

const TheGamePicture = React.forwardRef((CodePicture) => {//זה צאיך להיות בראש הקומפוננטה המצולמת

// const TheGamePicture = (CodePicture) => {


  

    debugger
    const [p,setP]=useState();
   const [befor,setBefor]=useState(null);
   const [after,setAfter]=useState(null);
   const U = useSelector((store) => { return store.users.user });
   const componentRef = useRef();//גם זה של הצילום

   
 const dispatch=useDispatch();
   useEffect(async () => {
       debugger
    const x=await getPictureByCode(dispatch,(CodePicture.match.params.x) );
    // CodePicture.match.params.x  
    debugger
   await setP(x);
 
   await setBefor(x.routeSoursePicture);
   await setAfter(x.routeGoalPicture);
  
  //  console.log(p+" "+befor+" "+after);
}, []);
  const downloadAndPrint=()=> {
    
    //function
  }
  

  return (
   
    <MDBRow >
      <MDBCol md='4'style={{margin:"auto",padding:"40px 0px"}} >
        <MDBCard
          className='card-image'
         
        >
          <div className='text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
            
              <h5 className='pink-text' style={{color:"#4b24da"}}>
              <MDBIcon icon="image" style={{ fontSize:"30px"}}/> התמונה המקורית
              </h5>
            
             {(befor==null)?
                <>
                <p>הועלה ע"י מנהל</p>
                 <MDBCardImage className="img-fluid" src={"http://localhost:26064/images/UploadByMenneger.jpg"} style={{ height: '350px' }} waves />
                </>
:
              <MDBCardImage className="img-fluid" src={`http://localhost:26064/images/${befor}`} style={{ height: '350px' }} waves />
             }
            </div>
          </div>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4' style={{margin:"auto",padding:"40px 0px"}} >
        <MDBCard
          className='card-image'
        
        >
          <div className='text-black text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
            <div>
              <h5 className='orange-text' style={{color:"#e02d9b"}}>
              <MDBIcon fab  icon="connectdevelop" style={{ fontSize:"30px"}} /> המשחק
              </h5>
              {/* <MDBCardTitle tag='h3' className='pt-2' >
                <strong>המשחק</strong>
              </MDBCardTitle> */}
              <MDBCardImage ref={componentRef} className="img-fluid" src={`http://localhost:26064/images/QuizPictures/${after}`} style={{ height: '300px' }} waves />

             <MDBCardFooter >
              <MDBBtn style={{ backgroundColor: "#e02d9b"}} color='deep-orange'>
                <MDBIcon  /> 
                <a download href={`http://localhost:26064/images/QuizPictures/${after}`}  style={{color:"#fff"}}        
                  onClick={ 
                    async()=>{
                    debugger
                   
                      axios.put("http://localhost:26064/api/PictureControler/cascading?id=3066"+U.codeUser,p)
                    }
                
               } 
             
               >הורדה
                       <i className="fa fa-download" />
</a>

{/* <button onClick={handlePrint}>download</button> */}
               
               <div className="App">
     
    </div>
              </MDBBtn>
              {/* <button download href="https://img.wattpad.com/0f9516f23f58ee8662b7bede1cdafcd5da568701/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7235737a47597565544a374a42513d3d2d3931333338373132322e313631646166326262663664653138353331393836353031383430392e6a7067?s=fit&w=720&h=720" image="https://img.wattpad.com/0f9516f23f58ee8662b7bede1cdafcd5da568701/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7235737a47597565544a374a42513d3d2d3931333338373132322e313631646166326262663664653138353331393836353031383430392e6a7067?s=fit&w=720&h=720"  action={handlePrint} >צלם מסך</button> */}

              {/* <div style={{ display: "none" }}><ComponentToPrint ref={componentRef} /></div> */}

              {/* <ImageGrid>

<MyCard title="first image" url="https://img.wattpad.com/0f9516f23f58ee8662b7bede1cdafcd5da568701/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7235737a47597565544a374a42513d3d2d3931333338373132322e313631646166326262663664653138353331393836353031383430392e6a7067?s=fit&w=720&h=720" image="https://img.wattpad.com/0f9516f23f58ee8662b7bede1cdafcd5da568701/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7235737a47597565544a374a42513d3d2d3931333338373132322e313631646166326262663664653138353331393836353031383430392e6a7067?s=fit&w=720&h=720" onClick={() => { this.downloadAndPrint(); }} />

</ImageGrid> */}

            </MDBCardFooter>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
})
const handlePrint =()=>{

}
// const handlePrint = useReactToPrint({
 
//   content: () => componentRef.current,
// });
// const handlePrint=()=>{useReactToPrint({
  
//   content: () => componentRef.current,
// });
  
// }
export default TheGamePicture;