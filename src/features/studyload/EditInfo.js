import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';

export default class EditInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: 'NaN',
      uni: 'NaN',
      studyleave: 'No',
      fellowship: 'No'
    };

    this.handleChangeDegree = this.handleChangeDegree.bind(this);
    this.handleChangeUni = this.handleChangeUni.bind(this);
    this.handleChangeStudyLeave = this.handleChangeStudyLeave.bind(this);
    this.handleChangeFellowship = this.handleChangeFellowship.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  handleChangeDegree(e) {
    this.setState({ degree: e.target.value });
  }

  handleChangeUni(e) {
    this.setState({ uni: e.target.value });
  }

  handleChangeStudyLeave(e) {
    this.setState({ studyleave: e.target.value });
  }

  handleChangeFellowship(e) {
    this.setState({ fellowship: e.target.value });
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }
  componentDidMount(e) {
    Api.viewStudyCredentials().then(response => {
      this.setState({
        degree: response.data.data.degree,
        uni: response.data.data.university
      });
      if (response.data.data.full_studyleave == true) {
        this.setState({ studyleave: 'Yes' });
      }
      if (response.data.data.faculty_fellowship == true) {
        this.setState({ fellowship: 'Yes' });
      }
    });
  }
  startEdit(e) {
    e.preventDefault();
    Api.editStudyCredentials({
      degree: this.state.degree,
      uni: this.state.uni,
      studyleave: this.state.studyleave,
      fellowship: this.state.fellowship
    })
      .then(result => {
        this.props.history.push('./view'); //change to profile later!!
        alert('Study credentials successfully edited!');
      })
      .catch(e => alert('Error editing Study Credentials!'));
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="studyload" />
        </div>
        <div className="bodyDiv">
          <div
            class="ui piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h2 class="ui blue header">EDIT STUDY LOAD</h2>
            </div>
            <Divider hidden="true" />
            <p>
              <a class="ui small header">Degree Enrolled In </a>
              <div class="ui input fluid mini focus">
                <input
                  type="text"
                  value={this.state.degree}
                  placeholder={this.state.degree}
                  onChange={this.handleChangeDegree}
                />
              </div>
            </p>
            <p>
              <a class="ui small header"> University Enrolled In </a>
              <div class="ui input fluid mini focus">
                <input
                  type="text"
                  value={this.state.uni}
                  placeholder={this.state.uni}
                  onChange={this.handleChangeUni}
                />
              </div>
            </p>
            <p>
              <div class="ui form" onChange={this.handleChangeStudyLeave}>
                <div class="inline fields">
                  <label>On Full Study Leave w/ Pay?</label>
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input type="radio" name="studyleave" />
                      <label>Yes</label>
                    </div>
                  </div>
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input type="radio" name="studyleave" />
                      <label>No</label>
                    </div>
                  </div>
                </div>
              </div>
            </p>
            <p>
              <div class="ui form" onChange={this.handleChangeFellowship}>
                <div class="inline fields">
                  <label>Recepient of Faculty Fellowship?</label>
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input type="radio" name="fellowship" />
                      <label>Yes</label>
                    </div>
                  </div>
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input type="radio" name="fellowship" />
                      <label>No</label>
                    </div>
                  </div>
                </div>
              </div>
            </p>
            <div class="ui center aligned container">
              <button
                class="ui center aligned blue button"
                onClick={this.startEdit}>
                Save changes
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
