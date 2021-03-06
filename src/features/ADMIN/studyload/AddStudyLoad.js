import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import NavBar from './../ui/NavBarAdmin';

export default class AddStudyLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: '',
      uni: '',
      studyleave: '',
      fellowship: '',
      courseno: '',
      ccred: '',
      day: '',
      time: '',
      school: '',
      slcred: ''
    };

    this.handleChangeDegree = this.handleChangeDegree.bind(this);
    this.handleChangeUni = this.handleChangeUni.bind(this);
    this.handleChangeStudyLeave = this.handleChangeStudyLeave.bind(this);
    this.handleChangeFellowship = this.handleChangeFellowship.bind(this);
    this.handleChangeCourseno = this.handleChangeCourseno.bind(this);
    this.handleChangeCcred = this.handleChangeCcred.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.handleChangeSlcred = this.handleChangeSlcred.bind(this);
    this.startAdd = this.startAdd.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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

  handleChangeCourseno(e) {
    this.setState({ courseno: e.target.value });
  }

  handleChangeCcred(e) {
    this.setState({ ccred: e.target.value });
  }

  handleChangeDay(e) {
    this.setState({ day: e.target.value });
  }

  handleChangeTime(e) {
    this.setState({ time: e.target.value });
  }

  handleChangeSchool(e) {
    this.setState({ school: e.target.value });
  }

  handleChangeSlcred(e) {
    this.setState({ slcred: e.target.value });
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  startAdd(e) {
    //   e.preventDefault();
    //   Api.addstudyload({
    // degree: this.state.degree,
    // uni: this.state.uni,
    // studyleave: this.state.studyleave,
    // fellowship: this.state.fellowship,
    // courseno: this.state.courseno,
    // ccred: this.state.ccred,
    // day: this.state.day,
    // time: this.state.time,
    // school: this.state.school,
    // slcred: this.state.slcred
    //   })
    //     .then(result => {
    //       this.props.history.push('./studyload/view');  //change to profile later!!
    //       alert('Study load successfully added!');
    //     })
    //     .catch(e => alert('Error adding new Study Load!'));
  }

  render() {
    return (
      <div classNameName="App-header">
        <div>
        <NavBar {...this.props} Label="edit" subLabel="studyload"/>
        </div>
        <div classNameName="bodydiv">
        <div
          className="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 className="ui blue header">
            ADD STUDY LOAD
            </h2>
          </div>
          <Divider hidden="true" />
          <p>
            <a className="ui small header">Degree Enrolled In </a>
            <div className="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeDegree}
              />
            </div>
          </p>
          <p>
            <a className="ui small header"> University Enrolled In </a>
            <div className="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeUni}
              />
            </div>
          </p>
          <p>
            <div className="ui form">
              <div className="inline fields">
                <label>On Full Study Leave w/ Pay?</label>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="studyleave"
                      value="YES"
                      onClick={this.handleChangeStudyLeave}
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="studyleave"
                      value="NO"
                      onClick={this.handleChangeStudyLeave}
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
          </p>
          <p>
            <div className="ui form">
              <div className="inline fields">
                <label>Recepient of Faculty Fellowship?</label>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="fellowship"
                      value="YES"
                      onClick={this.handleChangeFellowship}
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="fellowship"
                      onClick={this.handleChangeFellowship}
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
          </p>
          <p>
            <a className="ui small header">Course Number </a>
            <div className="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeCourseno}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Course Credit </a>
            <div className="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeCcred}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Days </a>
            <div className="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeDay}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Time </a>
            <div className="ui input fluid mini focus">
              <input
                type="time"
                onChange={this.handleChangeTime}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">School </a>
            <div className="ui input fluid mini focus">
              <input
                type="text"
                onChange={this.handleChangeSchool}
              />
            </div>
          </p>
          <p>
            <a className="ui small header">Study Load Credits </a>
            <div className="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeSlcred}
              />
            </div>
          </p>
          <div className="ui center aligned container">
            <button
              className="ui center aligned blue button"
              onClick={this.startAdd}>
              Add Study Load
            </button>
          </div>
        </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}