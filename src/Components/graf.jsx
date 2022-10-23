import { Line } from "react-chartjs-2";
import { MDBContainer ,MDBCard,MDBCardBody} from "mdbreact";
import {getAllSickUsersInOneMonth} from '../Redax/Users/UserThank';
import React from "react";
import { MDBCardTitle } from "mdb-react-ui-kit";
import axios from "axios";

class ChartsPage extends React.Component {

    async componentDidMount() {
        const sicks = await getAllSickUsersInOneMonth();
        this.state.dataLine.datasets[0].data=sicks;
       
    }
    state = {
      
        dataLine: {
          labels: ["01", "02", "03", "04", "05", "06", "07","08","09","10","11","12","13", "14", "15", "16", "17", "19", "20","21","22","23","24","25", "26", "27", "28", "29", "30","31"],
          datasets: [
            {
              label: 'מספר החולים בחודש זה',
              fill: true,
              lineTension: 0.3,
              backgroundColor: "rgba(225, 204,230, .3)",
              borderColor: "rgb(205, 130, 158)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgb(205, 130,1 58)",
              pointBackgroundColor: "rgb(255, 255, 255)",
              pointBorderWidth: 10,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgb(0, 0, 0)",
              pointHoverBorderColor: "rgba(220, 220, 220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: []
            }
          ]
        }
      };
    
    
    
      render() {
        return (
        
          <MDBCard style={{opacity:"0.7"}}>
          
            <MDBCardBody><MDBContainer>
         
          <Line class="myLine"data={this.state.dataLine} options={{ responsive: true }} />
        </MDBContainer></MDBCardBody></MDBCard>
          
        );
      }
    }
    
    export default ChartsPage;
      

