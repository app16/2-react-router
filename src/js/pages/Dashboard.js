import React from "react";
import Img from 'react-image';
import { Icon } from 'react-icons-kit';
import {edit} from 'react-icons-kit/feather/edit';

const param="patID=PA3";
const patID="PA3";
const patData=[];

const blockdata =[];

const TableRow1 = ({ SrNo, MedID, Medname, Dosage, Frequency}) => {
    return (
      <tr>
        <td>{SrNo}</td>
        <td>{MedID}</td>
        <td>{Medname}</td>
        <td>{Dosage}</td>
        <td>{Frequency}</td>
      </tr>
    );
  }

  const TableRow2 = ({ SrNo, LifeID, Steps, Sleep, Calories}) => {
    return (
      <tr>
        <td>{SrNo}</td>
        <td>{LifeID}</td>
        <td>{Steps}</td>
        <td>{Sleep}</td>
        <td>{Calories}</td>
      </tr>
    );
  }

  const TableRow3 = ({ SrNo, HistID, SessionDate, ProviderID, Comments}) => {
    return (
      <tr>
        <td>{SrNo}</td>
        <td>{HistID}</td>
        <td>{SessionDate}</td>
        <td>{ProviderID}</td>
        <td>{Comments}</td>
      </tr>
    );
  }
  const TableRow4 = ({ SrNo, blockNumber, prevHash, currentHash}) => {
    return (
      <tr>
        <td>{SrNo}</td>
        <td>{blockNumber}</td>
        <td>{prevHash}</td>
        <td>{currentHash}</td>
      </tr>
    );
  }

export default class Dashboard extends React.Component {
  constructor (props){
    super(props);
  this.state={
    medname:'',
    dosage:'',
    frequency:'',
    steps:'',
    sleep:'',
    cals:'',
    sesDate:'',
    proID:'',
    comms:''
  };
  this.handleInputChange = this.handleInputChange.bind(this);
  this.componentDidMount = this.componentDidMount.bind(this);
  this.putblockdata = this.putblockdata.bind(this);
  this.uploadMedication = this.uploadMedication.bind(this);
  this.uploadHistory = this.uploadHistory.bind(this);
  this.uploadLifestyle = this.uploadLifestyle.bind(this);


}
componentDidMount(){
  fetch('http://130.147.175.222:8099/querypatdb?'+`${param}`,{
     method: 'get'
   }).then(res =>{if (res.status>=200 && res.status<300) {
     return res.json();
  }
 else {
   console.log('sometihng went wrong');
      }
    }).then(function (json){

      for(var i in json){
        var count=1;
        for(var j in json[i].data){
          let patreq={
            id:count,
            category: json[i].category,
            patdata:json[i].data[j]
          };

          if(patreq.category=="Medication"){
            patreq.patdata.MedID='MED'+patreq.patdata.MedID;
          } else if(patreq.category=="Lifestyle"){
            patreq.patdata.LifeID='LIFE'+patreq.patdata.LifeID;
          } else if (patreq.category=="History"){
            patreq.patdata.HistID='HIST'+patreq.patdata.HistID;
          }
          patData.push(patreq);
          count = count +1;
        }
      }
      console.log(patData);

      }
    );
    this.putblockdata();
}

  putblockdata(){
    fetch('http://130.147.175.222:8099/chaindashboard',{
     method: 'get'
   }).then(res =>{if (res.status>=200 && res.status<300) {
     return res.json();
  }
 else {
   console.log('sometihng went wrong');
      }
    }).then(function (json){
      var count = 1;
      for (var i in json){
        let blocks={
          srno:count,
          block:json[i]
        };
        blockdata.push(blocks);
        count = count +1;
      }
      console.log(blockdata)
    });
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]:value
    });
  }
  uploadMedication(){
    console.log('The submit button was clicked. ');
    var payload = {
      "patID" : 'PA3',
      "med": this.state.medname,
      "dos": this.state.dosage,
      "freq": this.state.frequency
    };

     fetch('http://130.147.175.222:8099/uploadMed',{
       method: 'post',
       body : JSON.stringify(payload),
       headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}
     }).then(res =>{if (res.status>=200 && res.status<300) {
       console.log(res);
     }
   else {
     console.log('sometihng went wrong');
        }
      }).catch(err => err);

    console.log(payload);
  }

  uploadHistory(){
    console.log('The submit button was clicked. ');
    var payload = {
      "patID" : 'PA3',
      "sesDate": this.state.sesDate,
      "proID": this.state.proID,
      "comm": this.state.comms
    };

     fetch('http://130.147.175.222:8099/uploadHist',{
       method: 'post',
       body : JSON.stringify(payload),
       headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}
     }).then(res =>{if (res.status>=200 && res.status<300) {
       console.log(res);
     }
   else {
     console.log('sometihng went wrong');
        }
      }).catch(err => err);

    console.log(payload);
  }

  uploadLifestyle(){
    console.log('The submit button was clicked. ');
    var payload = {
      "patID" : 'PA3',
      "steps": this.state.steps,
      "sleep": this.state.sleep,
      "cals": this.state.cals
    };

     fetch('http://130.147.175.222:8099/uploadLife',{
       method: 'post',
       body : JSON.stringify(payload),
       headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}
     }).then(res =>{if (res.status>=200 && res.status<300) {
       console.log(res);
     }
   else {
     console.log('sometihng went wrong');
        }
      }).catch(err => err);

    console.log(payload);
  }
  render() {
    console.log("Upload 123");
    return (
      <div class="well well-lg">
         <div class = "row">
          <div class ="col-8">
            <div class ="row-1">
              <div class ="panel panel-primary">
                <div class="panel-heading">
                    Medication
                  </div>
                  <div class="panel-body">
                  <form>
                  <label>
                  MedName:&nbsp;
                  <input type="text" style={{width: "110px"}} name="medname" id= "medname" ref= "medname" value={this.state.medname} onChange={this.handleInputChange}/>
                  &nbsp; Dosage:&nbsp;
                  <input type="text" style={{width: "110px"}} name="dosage" id ="dosage"  ref= "dosage" value={this.state.dosage} onChange={this.handleInputChange}/>
                  &nbsp; Frequency:&nbsp;
                  <input type="text" style={{width: "110px"}} name="frequency" id = "frequency" ref= "frequency" value={this.state.frequency} onChange={this.handleInputChange}/>
                  </label>
                  &nbsp;&nbsp;
                  <input type="button" value="Submit" onClick={()=> this.uploadMedication()} />
                  </form>
                      <div class ="col-15">
                          <div class ="row-1">
                              <div class="panel-heading"> DATA </div>
                                 <div class ="panel panel-primary">
                                <div class="panel-body">
                                 <div class="table-hover">
                                  <table class ="table">
                                  <thead>
                                 <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">MedID</th>
                                 <th scope="col">MedName</th>
                                 <th scope="col">Dosage</th>
                                 <th scope="col">Frequency</th>
                                 </tr>
                                 </thead>
                                 <tbody>
                                 {
                                     patData.map((upload) => {
                                       if(upload.category == 'Medication'){
                                       return (
                                           <TableRow1
                                             key={upload.id}
                                             SrNo={upload.id}
                                             MedID={upload.patdata.MedID}
                                             Medname={upload.patdata.MedName}
                                             Dosage={upload.patdata.Dosage}
                                             Frequency={upload.patdata.Frequency}
                                           />
                                       );}
                                     })
                                   }

                                 </tbody>
                                 </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </div>
                  </div>
                </div>
              </div>
            <div class ="row-2">
              <div class ="panel panel-primary">
                <div class="panel-heading">
                 Lifestyle
                </div>
                <div class="panel-body">
                <form>
                <label>
                Steps:&nbsp;
                <input type="text" style={{width: "120px"}} name="steps" id="steps" ref= "steps" value={this.state.steps} onChange={this.handleInputChange}/>
                &nbsp;&nbsp;&nbsp;&nbsp; Sleep:&nbsp;
                <input type="text" style={{width: "120px"}} name="sleep" id="sleep" ref= "sleep" value={this.state.sleep} onChange={this.handleInputChange}/>
                &nbsp;&nbsp;&nbsp;&nbsp; Calories:&nbsp;
                <input type="text" style={{width: "120px"}} name="cals" id="cals" ref= "cals" value={this.state.cals} onChange={this.handleInputChange}/>
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="Submit" onClick={()=> this.uploadLifestyle()} />
                </form>
                    <div class ="col-15">
                        <div class ="row-1">
                            <div class="panel-heading"> DATA</div>
                               <div class ="panel panel-primary">
                              <div class="panel-body">
                               <div class="table-hover">
                                <table class ="table">
                                <thead>
                               <tr>
                               <th scope="col">#</th>
                               <th scope="col">LifeID</th>
                               <th scope="col">Steps</th>
                               <th scope="col">Sleep</th>
                               <th scope="col">Calories</th>
                               </tr>
                               </thead>
                               <tbody>
                               {
                                   patData.map((upload) => {
                                     if(upload.category == 'Lifestyle'){
                                     return (
                                         <TableRow2
                                           key={upload.id}
                                           SrNo={upload.id}
                                           LifeID={upload.patdata.LifeID}
                                           Steps={upload.patdata.Steps}
                                           Sleep={upload.patdata.Sleep}
                                           Calories={upload.patdata.Calories}
                                         />
                                     );}
                                   })
                                 }

                               </tbody>
                               </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                </div>
              </div>
            </div>
            <div class ="row-3">
              <div class ="panel panel-primary">
                <div class="panel-heading">History</div>
                <div class="panel-body">
                <form>
                <label>
                SessionDate:&nbsp;
                <input type="text" style={{width: "100px"}} name="sesDate" id="sesDate" ref= "sesDate" value={this.state.sesDate} onChange={this.handleInputChange}/>
                &nbsp;&nbsp; ProviderID:&nbsp;
                <input type="text" style={{width: "100px"}} name="proID" id="proID" ref= "proID" value={this.state.proID} onChange={this.handleInputChange}/>
                &nbsp;&nbsp; Comments:&nbsp;
                <input type="text" style={{width: "100px"}} name="comms" id="comms" ref= "comms" value={this.state.comms} onChange={this.handleInputChange}/>
                </label>
                &nbsp;&nbsp;
                <input type="button" value="Submit" onClick={()=> this.uploadHistory()} />
                </form>
                              <div class ="col-15">
                                  <div class ="row-1">
                                      <div class="panel-heading"> DATA </div>
                                         <div class ="panel panel-primary">
                                        <div class="panel-body">
                                         <div class="table-hover">
                                          <table class ="table">
                                          <thead>
                                         <tr>
                                         <th scope="col">#</th>
                                         <th scope="col">HistID</th>
                                         <th scope="col">SessionDate</th>
                                         <th scope="col">ProvideID</th>
                                         <th scope="col">Comments</th>
                                         </tr>
                                         </thead>
                                         <tbody>
                                         {
                                             patData.map((upload) => {
                                               if(upload.category == 'History'){
                                               return (
                                                   <TableRow3
                                                     key={upload.id}
                                                     SrNo={upload.id}
                                                     HistID={upload.patdata.HistID}
                                                     SessionDate={upload.patdata.SessionDate}
                                                     ProviderID={upload.patdata.ProviderID}
                                                     Comments={upload.patdata.Comments}
                                                   />
                                               );}
                                             })
                                           }
                                         </tbody>
                                         </table>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      </div>
                </div>
              </div>
            </div>
          </div>
            <div class ="col-4">
              <div class ="panel panel-primary">
                <div class="panel-body"><center>
                  <img src="https://static0.fitbit.com/simple.b-cssdisabled-jpg.h0c2a5f210795535caebd5d7da4a1d7e0.pack?items=%2Fcontent%2Fassets%2Fapp2%2Fimages%2Fscreen-04-log-weight.jpg" height="400" width="250"/>
                  </center>
                  </div>
              </div>
            </div>
<div class ="col-12">
    <div class ="row-1">
        <div class="panel-heading"> BLOCKS</div>
           <div class ="panel panel-primary">
          <div class="panel-body">
           <div class="table-hover">
            <table class ="table" style={{fontSize:'15px'}}>
            <thead>
           <tr>
           <th scope="col">#</th>
           <th scope="col">Block Number</th>
           <th scope="col">Previous Hash</th>
           <th scope="col">Current Hash</th>
           </tr>
           </thead>
           <tbody style={{'wordBreak': 'break-all'}}>
            {
               blockdata.map((upload) => {
                 return (
                     <TableRow4
                       key={upload.srno}
                       SrNo={upload.srno}
                       blockNumber={upload.block.blockNumber}
                       prevHash={upload.block.prevHash}
                       currentHash={upload.block.dataHash}
                     />
                 );
               })
             }

           </tbody>
           </table>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    );
  }
}
