import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import EditNav from './EditNav';
import SideNav from './SideNav';
import GenericLogout from './GenericLogout';

export default class NavBarAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: this.props.Label,
      subMenu: this.props.subLabel,
      username: ''
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    Api.getSession().then(result => {
      if (result.data.data !== null) {
        this.setState({ username: result.data.data.username });
      } else {
        this.props.history.push('/');
      }
    });
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('/');
  }

  // https://stackoverflow.com/questions/35537229/how-to-update-parents-state-in-react ~just leaving it here

  handleChange(e) {
    console.log('');
    console.log('handleChange by NavBarAdmin');

    e.preventDefault();
    this.setState({ activeMenu: e.currentTarget.id });
    if (e.currentTarget.id === 'all') {
      this.props.history.push('/admin/viewAllFSR');
    } else if (e.currentTarget.id === 'pending') {
      this.props.history.push('/admin/viewPendingFSR');
    } else if (e.currentTarget.id === 'approved') {
      this.props.history.push('/admin/viewApprovedFSR');
    } else if (e.currentTarget.id === 'faculty') {
      this.props.history.push('/admin/viewAllFaculty');
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        {this.state.activeMenu === 'all' ? (
          <div class="ui blue inverted huge menu div1">
            <a class="active item" id="all" onClick={this.handleChange}>
              All FSR
            </a>
            <a class="item" id="pending" onClick={this.handleChange}>
              Pending FSR
            </a>
            <a class="item" id="approved" onClick={this.handleChange}>
              Approved FSR
            </a>
            <a class="item" id="faculty" onClick={this.handleChange}>
              All Faculty
            </a>
            <div class="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i class="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
        ) : this.state.activeMenu === 'pending' ? (
          <div class="ui blue inverted huge menu div1">
            <a class="item" id="all" onClick={this.handleChange}>
              All FSR
            </a>
            <a class="active item" id="pending" onClick={this.handleChange}>
              Pending FSR
            </a>
            <a class="item" id="approved" onClick={this.handleChange}>
              Approved FSR
            </a>
            <a class="item" id="faculty" onClick={this.handleChange}>
              All Faculty
            </a>
            <div class="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i class="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
        ) : this.state.activeMenu === 'approved' ? (
          <div class="ui blue inverted huge menu div1">
            <a class="item" id="all" onClick={this.handleChange}>
              All FSR
            </a>
            <a class="item" id="pending" onClick={this.handleChange}>
              Pending FSR
            </a>
            <a class="active item" id="approved" onClick={this.handleChange}>
              Approved FSR
            </a>
            <a class="item" id="faculty" onClick={this.handleChange}>
              All Faculty
            </a>
            <div class="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i class="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
        ) : this.state.activeMenu === 'faculty' ? (
          <div class="ui blue inverted huge menu div1">
            <a class="item" id="all" onClick={this.handleChange}>
              All FSR
            </a>
            <a class="item" id="pending" onClick={this.handleChange}>
              Pending FSR
            </a>
            <a class="item" id="approved" onClick={this.handleChange}>
              Approved FSR
            </a>
            <a class="active item" id="faculty" onClick={this.handleChange}>
              All Faculty
            </a>
            <div class="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i class="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
        ) : this.state.activeMenu === 'edit' ? (
          <div>
            <EditNav {...this.props} activeSubLabel={this.state.subMenu} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
