import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenericDropdown from './../GenericDropdown';

const optionsDays = [
  { text: 'Monday' },
  { text: 'Tuesday' },
  { text: 'Wednesday' },
  { text: 'Thursday' },
  { text: 'Friday' }
];

export default class AddSubject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjcode: '',
      seccode: '',
      type: '',
      gradcourse: '',
      units: '',
      room: '',
      starttime: '',
      endtime: '',
      days: ''
    };

    // this.handleChangeSubjid = this.handleChangeSubjid.bind(this);
    this.handleChangeSubjcode = this.handleChangeSubjcode.bind(this);
    this.handleChangeSeccode = this.handleChangeSeccode.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeGradcourse = this.handleChangeGradcourse.bind(this);
    this.handleChangeUnits = this.handleChangeUnits.bind(this);
    this.handleChangeRoom = this.handleChangeRoom.bind(this);
    this.handleChangeStarttime = this.handleChangeStarttime.bind(this);
    this.handleChangeEndtime = this.handleChangeEndtime.bind(this);
    this.handleChangeDays = this.handleChangeDays.bind(this);
    this.startAdd = this.startAdd.bind(this);
  }

  componentDidMount() {
    console.log(this.props.history);
    // if(typeof this.props.history!=='undefined'){
    //   this.setState({emp_id: this.props.history.location.state.emp_id});
    // }
  }

  // handleChangeSubjid(e) {
  //   this.setState({ subjid: e.target.value });
  // }

  handleChangeSubjcode(e) {
    this.setState({ subjcode: e.target.value });
  }

  handleChangeSeccode(e) {
    this.setState({ seccode: e.target.value });
  }

  handleChangeType(e) {
    this.setState({ type: e.target.value });
    console.log(this.state.type);
  }

  handleChangeGradcourse(e) {
    this.setState({ gradcourse: e.target.value });
    console.log(this.state.gradcourse);
  }

  handleChangeUnits(e) {
    this.setState({ units: e.target.value });
  }

  handleChangeRoom(e) {
    this.setState({ room: e.target.value });
  }

  handleChangeStarttime(e) {
    this.setState({ starttime: e.target.value });
  }

  handleChangeEndtime(e) {
    this.setState({ endtime: e.target.value });
  }

  handleChangeDays(e){
    this.setState({ days: e.target.value});
  }

  startAdd(e) {
    e.preventDefault();
    var isLec = '0';
    var isGrad = '0';
    if (this.state.type === 'Lecture') isLec = '1'; //fix radio button
    if (this.state.gradcourse === 'Yes') isGrad = '1'; //fix radio button

    Api.addSubjects({
      subject_code: this.state.subjcode,
      section_code: this.state.seccode,
      isLecture: isLec,
      isGraduate: isGrad,
      units: this.state.units,
      room: this.state.room,
      start_time: this.state.starttime,
      end_time: this.state.endtime,
      days: this.state.days
    })
      .then(result => {
        this.props.history.push('./view');
        alert('Subject successfully added!');
      })
      // .catch(e => alert(e));
      .catch(e => alert('Error adding new Subject!'));
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="Subjects" />
        </div>
        <div className="bodyDiv">
          <div
            className="ui piled very padded text left aligned container segment mainDiv"
            color="teal">
            <div>
              <h2 className="ui blue header">ADD SUBJECT</h2>
            </div>
            <Divider hidden="true" />
            <p>
              <a className="ui small header"> Subject Code</a>
              <div className="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeSubjcode} />
              </div>
            </p>
            <p>
              <a className="ui small header"> Section Code</a>
              <div className="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeSeccode} />
              </div>
            </p>
            <p>
              <div className="ui form" onChange={this.handleChangeType}>
                <div className="inline fields">
                  <label>Type</label>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input type="radio" name="type" value="Lecture" />
                      <label>Lecture</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input type="radio" name="type" value="Laboratory" />
                      <label>Laboratory</label>
                    </div>
                  </div>
                </div>
              </div>
            </p>
            <p>
              <div className="ui form" onChange={this.handleChangeGradcourse}>
                <div className="inline fields">
                  <label>Graduate Course?</label>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input type="radio" name="gradcourse" value="Yes" />
                      <label>Yes</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input type="radio" name="gradcourse" value="No" />
                      <label>No</label>
                    </div>
                  </div>
                </div>
              </div>
            </p>
            <p>
              <a className="ui small header">Units</a>
              <div className="ui input fluid mini focus">
                <input type="number" onChange={this.handleChangeUnits} />
              </div>
            </p>
            <p>
              <a className="ui small header">Room</a>
              <div className="ui input fluid mini focus">
                <input type="text" onChange={this.handleChangeRoom} />
              </div>
            </p>

            <p>
              <a className="ui small header">Days</a>
              <GenericDropdown
                labelProper="Choose Day of Subject"
                value={this.state.days}
                handler={this.handleChangeDays}
                options={optionsDays}
              />
            </p>

            <p>
              <a className="ui small header">Start Time</a>
              <div className="ui input fluid mini focus">
                <input type="time" onChange={this.handleChangeStarttime} />
              </div>
            </p>
            <p>
              <a className="ui small header">End Time</a>
              <div className="ui input fluid mini focus">
                <input type="time" onChange={this.handleChangeEndtime} />
              </div>
            </p>

            <div className="ui center aligned container">
              <button
                className="ui center aligned blue button"
                onClick={this.startAdd}>
                Add Subject
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
