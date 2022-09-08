import { MDBContainer } from "mdbreact";
import { MDBNotification } from "mdbreact";
import { MDBAlert } from "mdbreact";
import { MDBNavbarLink } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
const Oops=()=>{
    return<>
<MDBContainer style={{marginTop:"20px"}}>
<MDBAlert  color="red">
  <h4 style={{textAlign:"center"}} className="alert-heading">אופססס</h4>
  <p style={{textAlign:"center"}}>התמונה שבחרת אינה מתאימה</p>
  <hr />
  <p style={{textAlign:"center"}} className="mb-0">וודא שהיא מכילה עצם אחד בלבד</p>
</MDBAlert>
<MDBNavbarLink><NavLink to='/Pictures' >חזרה לכל המשחקים</NavLink></MDBNavbarLink>

</MDBContainer></>
}
export default Oops;