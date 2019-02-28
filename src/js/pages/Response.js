import React from "react";
import {check} from 'react-icons-kit/feather/check'
import {x} from 'react-icons-kit/feather/x'
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import { Icon } from 'react-icons-kit'
export default class Permissions extends React.Component {
  render() {


    console.log("featured");
    return (
      <div class="well well-lg">
         <div class = "row">
          <div class ="col-8">
            <div class ="row-1">
              <div class ="panel panel-primary">
                <div class="panel-heading">
                    DASHBOARD
                  </div>
              <div class="panel-body">
                <div class="table-hover">
                  <table class ="table">
                  <thead>
<tr>
  <th scope="col">#</th>
  <th scope="col">DoctorID</th>
  <th scope="col">Category</th>
  <th scope="col">Status</th>
  <th scope="col">Response</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">1</th>
  <td>111</td>
  <td>Medication</td>
  <td>Approved</td>
  <td>
  <ButtonToolbar>
    <button type="button" class="btn btn-primary"><Icon size={'18'} icon={x}/></button>
  </ButtonToolbar>
  </td>
</tr>
<tr>
  <th scope="row">2</th>
  <td>112</td>
  <td>History</td>
  <td>Pending</td>
  <td>
  <ButtonToolbar>
    <button type="button" class="btn btn-success"><Icon size={'18'} icon={check}/></button>
    <button type="button" class="btn btn-danger"><Icon size={'18'} icon={x}/></button>
  </ButtonToolbar>
  </td>
</tr>
<tr>
  <th scope="row">3</th>
  <td>113</td>
  <td>Followup</td>
  <td>Pending</td>
<td>
<ButtonToolbar>
  <button type="button" class="btn btn-success"><Icon size={'18'} icon={check}/></button>
  <button type="button" class="btn btn-danger"><Icon size={'18'} icon={x}/></button>
</ButtonToolbar>
</td>
</tr>
</tbody>
</table>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class ="col-4">
      <div class ="panel panel-primary">
          <div class="panel-body">
                              Demographics

          </div>
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
    );
  }

}
