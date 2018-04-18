import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import TermYearModal from './TermYearModal';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.startView = this.startView.bind(this);
  }

  componentDidMount() {
    Api.getSession().then(result => {
      if (result.data.data !== null) {
        Api.getEmployeeData({ empid: result.data.data.emp_id }).then(res => {
          this.setState({ data: res.data.data });
          if (result.data.data.is_studying === 0)
            this.setState({
              data: { ...this.state.data, is_full_time: 'YES' }
            });
          else
            this.setState({ data: { ...this.state.data, is_full_time: 'NO' } });
        });
      }
    });
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.history.push('/profile/edit');
  }

  startView(e) {
    e.preventDefault();
    this.props.history.push('./link-to-fsr-pdf'); //view FSR
  }

  render() {
    return (
      <div classname="App-header">
        <TermYearModal
          {...this.props}
          empid={this.state.data.emp_id}
          is_new={this.state.data.is_new}
        />
        <NavBar
          {...this.props}
          Label="profile"
          subLabel=""
          is_being_approved={this.state.data.is_being_approved}
        />
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              <button
                class="ui blue right floated button"
                onClick={this.handleEdit}>
                Edit Profile
              </button>
              PROFILE
            </h2>
          </div>
          <div class="ui large list">
            <div>
              <div class="item">
                <div class="content">
                  <b>
                    <i class="user circle icon" />Full Name:{' '}
                  </b>
                  {this.state.data.f_name} {this.state.data.m_name}{' '}
                  {this.state.data.l_name}
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <b>
                    <i class="id card outline icon" />Employee ID:{' '}
                  </b>
                  {this.state.data.emp_id}
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <b>
                    <i class="building icon" />Department and College:{' '}
                  </b>
                  {this.state.data.department}, {this.state.data.college}
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <b>
                    <i class="male icon" />Full-time Employee?{' '}
                  </b>
                  {this.state.data.is_full_time}
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <b>
                    <i class="users icon" />Employee Type:{' '}
                  </b>
                  {this.state.data.emp_type} {this.state.data.emp_type_no}
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <b>
                    <i class="mail outline icon" />Email Address:{' '}
                  </b>
                  {this.state.data.email}
                </div>
              </div>
            </div>
          </div>
          <Divider hidden="true" />
          <Divider hidden="true" />
          <div>
            <h2 class="ui blue header">Past FSRs</h2>
            <table class="ui blue table">
              <thead>
                <tr>
                  <th>School Year</th>
                  <th>Semester</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2017-2018</td>
                  <td>2nd</td>
                  <td>
                    <button
                      class="ui large compact icon button"
                      onClick={this.startView}>
                      <i class="eye icon"> </i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Divider hidden="true" />
        </div>
      </div>
    );
  }
}
