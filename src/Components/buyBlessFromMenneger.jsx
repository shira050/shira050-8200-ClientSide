import { MDBContainer } from "mdbreact";
import { MDBNotification } from "mdbreact";
import { MDBAlert } from "mdbreact";
const bless=()=>{
    return<>
<MDBContainer style={{marginTop:"20px"}}>
<MDBAlert  color="success">
  <h4 style={{textAlign:"center"}} className="alert-heading">המשחק נוסף בהצלחה!</h4>
  <p style={{textAlign:"center"}}>תוכל לראות את שמך מופיע על המשחק  !!!</p>
  <hr />
  <p style={{textAlign:"center"}} className="mb-0">תודה ובהנאה מהמשחקים...</p>
</MDBAlert>
</MDBContainer></>
}
export default bless;