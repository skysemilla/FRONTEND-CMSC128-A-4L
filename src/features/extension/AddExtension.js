import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import GenericDropdown from './../GenericDropdown'
import NavBar from './../ui/NavBar'
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'

const optionsMain = [ {id : 0, text : 'Trainings'},
                      {id : 1, text : 'Information Dissemination'},
                      {id : 2, text : 'Workshops'},
                      {id : 3, text : 'Symposium'},
                      {id : 4, text : 'Others'}]


export default class AddExtension extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: '',
      title: '',
      noOfHours: '',
      noOfParticipants: '',
      startDate: '',
      endDate: '',
      role: '',
      fundingAgency: '',
      approvedCreditUnits: '',
    };

    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeNoOfHours = this.handleChangeNoOfHours.bind(this);
    this.handleChangeNoOfParticipants = this.handleChangeNoOfParticipants.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);
    this.handleChangeFundingAgency = this.handleChangeFundingAgency.bind(this);
    this.handleChangeApprovedCreditUnits = this.handleChangeApprovedCreditUnits.bind(this);

    this.startAdd = this.startAdd.bind(this);
  }

  handleChangeType(e) {
    this.setState({ type: e.target.value });
    console.log(e.target.value);
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleChangeNoOfHours(e) {
    this.setState({ noOfHours: e.target.value });
  }

  handleChangeNoOfParticipants(e) {
    this.setState({ noOfParticipants: e.target.value });
  }

  handleChangeStartDate(e) {
    this.setState({ startDate: e.target.value });
  }

  handleChangeEndDate(e) {
    this.setState({ endDate: e.target.value });
  }

  handleChangeRole(e) {
    this.setState({ role: e.target.value });
  }

  handleChangeFundingAgency(e) {
    this.setState({ fundingAgency: e.target.value });
  }

  handleChangeApprovedCreditUnits(e) {
    this.setState({ approvedCreditUnits: e.target.value });
  }

  startAdd(e) {
    // e.preventDefault();
    // Api.addextension({
    //   type: this.state.type,
    //   title: this.state.title,
    //   noOfHours: this.state.noOfHours,
    //   noOfParticipants: this.state.noOfParticipants,
    //   duration: this.state.duration,
    //   fundingAgency: this.state.fundingAgency,
    //   role: this.state.role,
    //   approvedCreditUnits: this.state.approvedCreditUnits,
    //   totalExtandCommUnits: this.state.totalExtandCommUnits
    // })
    //   .then(result => {
    //     this.props.history.push('./extension/view');
    //     alert('Extension successfully added!');
    //   })
    //   .catch(e => alert('Error adding new Extension!'));
  }

  render() {

    return (
      <div className="App-header">
        <NavBar {...this.props} Label="FSR" subLabel="extension"/>
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              ADD EXTENSION
            </h2>
          </div>
          <Divider hidden="true" />
          <p>
          <div>
            <GenericDropdown
              labelHeader = "Extension Type "
              labelProper = "Choose Extension Type"
              value = {this.state.type}
              handler = {this.handleChangeType}
              options = {optionsMain}/>
          </div>
          </p>
          <p>
            <a class="ui small header"> Title </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeTitle}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> No. of Hours </a>
            <div class="ui input fluid mini focus">
              <input
                disabled
                type="number"
                onChange={this.handleChangeNoOfHours}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> No. of Participants </a>
              <div class="ui input fluid mini focus">
                <input
                  type="number"
                  onChange={this.handleChangeNoOfParticipants}
                />
            </div>
          </p>

          <p>
          <a class="ui small header"> Duration </a>
            <div class="equal width fields">
              <div class="field">
                <a class="ui small header"> Start Date </a>
                  <div class="ui input fluid mini focus">
                    <input
                      type="date"
                      onChange={this.handleChangeStartDate}
                      style={{width: "100px"}}
                    />
                  </div>
              </div>
              <div class="field">
                <a class="ui small header"> End Date </a>
                  <div class="ui input fluid mini focus">
                    <input
                      type="date"
                      onChange={this.handleChangeEndDate}
                      style={{width: "100px"}}
                    />
                  </div>
              </div>
            </div>
          </p>

          <p>
            <a class="ui small header"> Role </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeRole}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> Funding Agency </a>
            <div class="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeFundingAgency}
              />
            </div>
          </p>
          <p>
            <a class="ui small header"> Approved Credit Units </a>
            <div class="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeApprovedCreditUnits}
              />
            </div>
          </p>
          <div class="ui center aligned container">
          <button
              class="ui center aligned blue button"
              onClick={this.startAdd}>
              Add Extension
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}

ReactDOM.render(<AddExtension />, document.getElementById('root'));
