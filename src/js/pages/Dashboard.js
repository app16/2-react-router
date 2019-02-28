import React from "react";
import Img from 'react-image';
import { Icon } from 'react-icons-kit';
import {edit} from 'react-icons-kit/feather/edit';




export default class Dashboard extends React.Component {
  render() {
    console.log("Upload Data");
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
                  MedName:
                  <input type="text" name="name" />
                  &nbsp;&nbsp; Dosage:
                  <input type="text" name="name" />
                  &nbsp;&nbsp; Frequency:
                  <input type="text" name="name" />
                  </label>
                  &nbsp;&nbsp;
                  <input type="submit" value="Submit" />
                  </form>
                      <span>  <button type="button" class="btn"><Icon size={'16'} icon={edit}/></button></span>
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
                                 <th scope="col">MedName</th>
                                 <th scope="col">Dosage</th>
                                 <th scope="col">Frequency</th>
                                 </tr>
                                 </thead>
                                 <tbody>
                                 <tr>
                                 <th scope="row">2</th>
                                 <td>112</td>
                                 <td>History </td>
                                 <td>Pending </td>
                                 </tr>
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
                Steps:
                <input type="text" name="name" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sleep:
                <input type="text" name="name" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Calories:
                <input type="text" name="name" />
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="submit" value="Submit" />
                </form>
                    <span>  <button type="button" class="btn"><Icon size={'16'} icon={edit}/></button></span>
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
                               <th scope="col">Steps</th>
                               <th scope="col">Sleep</th>
                               <th scope="col">Calories</th>
                               </tr>
                               </thead>
                               <tbody>
                               <tr>
                               <th scope="row">2</th>
                               <td>112</td>
                               <td>History </td>
                               <td>Pending </td>
                               </tr>
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
                <div class="panel-heading">
                  Follow-Ups
                </div>
                <div class="panel-body">
                              <span>  <button type="button" class="btn"><Icon size={'16'} icon={edit}/></button></span>
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
                                         <th scope="col">SessionDate</th>
                                         <th scope="col">Time</th>
                                         <th scope="col">Comments</th>
                                         </tr>
                                         </thead>
                                         <tbody>
                                         <tr>
                                         <th scope="row">2</th>
                                         <td>112</td>
                                         <td>History </td>
                                         <td>Pending </td>
                                         </tr>
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
<div class ="col-8">
    <div class ="row-1">
        <div class="panel-heading"> BLOCKS</div>
           <div class ="panel panel-primary">
          <div class="panel-body">
           <div class="table-hover">
            <table class ="table">
            <thead>
           <tr>
           <th scope="col">#</th>
           <th scope="col">TransactionID</th>
           <th scope="col">Category</th>
           <th scope="col">Status</th>
           <th scope="col">Response</th>
           </tr>
           </thead>
           <tbody>
           <tr>
           <th scope="row">2</th>
           <td>112</td>
           <td>History </td>
           <td>Pending </td>
           </tr>
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
