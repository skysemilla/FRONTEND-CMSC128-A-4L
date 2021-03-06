import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import { Divider } from 'semantic-ui-react';
import GenericDropdown from './../GenericDropdown';
import ConsultationDropdown from './ConsultationDropdown';
import ConsultationHourSubTypeDropdown from './ConsultationHourSubTypeDropdown';

const timeIndex = 9;
const optionsDays = [
  { text: 'Monday' },
  { text: 'Tuesday' },
  { text: 'Wednesday' },
  { text: 'Thursday' },
  { text: 'Friday' }
];

const optionsTimeFrom = [
  { value: 0, text: '8:00:00', label: '8:00 A.M' },
  { value: 1, text: '9:00:00', label: '9:00 A.M'},
  { value: 2, text: '10:00:00', label: '10:00 A.M' },
  { value: 3, text: '11:00:00', label: '11:00 A.M' },
  { value: 4, text: '12:00:00', label: '12:00 NN' },
  { value: 5, text: '1:00:00', label: '1:00 P.M' },
  { value: 6, text: '2:00:00', label: '2:00 P.M' },
  { value: 7, text: '3:00:00', label: '3:00 P.M' },
  { value: 8, text: '4:00:00', label: '4:00 P.M' }
];

const optionsTimeTo = [
  { value: 0, text: '9:00:00', label: '9:00 A.M' },
  { value: 1, text: '10:00:00', label: '10:00 A.M' },
  { value: 2, text: '11:00:00', label: '11:00 A.M' },
  { value: 3, text: '12:00:00', label: '12:00 NN' },
  { value: 4, text: '1:00:00', label: '1:00 P.M' },
  { value: 5, text: '2:00:00', label: '2:00 P.M' },
  { value: 6, text: '3:00:00', label: '3:00 P.M' },
  { value: 7, text: '4:00:00', label: '4:00 P.M' },
  { value: 8, text: '5:00:00', label: '5:00 P.M' }
];

const placeRegex = /^[A-Za-z][A-Za-z0-9.-\s]+$/;

export default class EditConsultationHours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      consultation_start_time: '',
      consultation_end_time: '',
      consultation_place: '',
      day: '',
      consultation_id: ''
    };

    this.handleChangePlace = this.handleChangePlace.bind(this);
    this.handleChangeConsultation_start_time = this.handleChangeConsultation_start_time.bind(
      this
    );
    this.handleChangeConsultation_end_time = this.handleChangeConsultation_end_time.bind(
      this
    );
    this.handleChangeConsultation_place = this.handleChangeConsultation_place.bind(
      this
    );
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  componentDidMount() {
    if (this.props.history.location.state === undefined)
      this.props.history.push('/consultationhours/view');
    else {
      Api.getSession().then(res => {
        if (res.data.data !== null) {
          if (typeof this.props.history !== undefined) {
            Api.viewSpecificConsultation({
              id: this.props.history.location.state.id
            }).then(result => {
              this.setState({
                consultation_start_time:
                  result.data.data[0].consultation_start_time,
                consultation_end_time:
                  result.data.data[0].consultation_end_time,
                consultation_place: result.data.data[0].consultation_place,
                day: result.data.data[0].day,
                consultation_id: result.data.data[0].consultation_id
              });
            });
          }
        }
      });
    }
  }

  handleChangeConsultation_start_time(e) {
    this.setState({ consultation_start_time: e.target.value });

    var index;
    for (index = 0; index < timeIndex; index++) {
      if (optionsTimeFrom[index].text === e.target.value) {
        this.setState({ timeFromValue: optionsTimeFrom[index].value });
      }
    }
  }

  handleChangeConsultation_end_time(e) {
    this.setState({ consultation_end_time: e.target.value });
  }

  handleChangeConsultation_place(e) {
    this.setState({ consultation_place: e.target.value });
  }

  handleChangeDay(e) {
    this.setState({ day: e.target.value });
  }

  handleChangeDays(e) {
    this.setState({ days: e.target.value });
  }

  handleChangePlace(e) {
    this.setState({ consultation_place: e.target.value });
  }

  startEdit(e) {
    e.preventDefault();
    if (
      this.state.day &&
      this.state.consultation_start_time !== '' &&
      this.state.consultation_end_time !== '' &&
      this.state.consultation_place
    ) {
      Api.editConsultation({
        consultation_start_time: this.state.consultation_start_time,
        consultation_end_time: this.state.consultation_end_time,
        consultation_place: this.state.consultation_place,
        day: this.state.day,
        emp_id: this.state.emp_id,
        consultation_id: this.state.consultation_id
      }).then(result => {
        this.props.history.push('/consultationhours/view');
        alert('Consultation successfully added!');
      });
    } else alert('Invalid Input!');
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} Label="FSR" subLabel="consultationhours" />
        <div
          className="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 className="ui blue header">EDIT CONSULTATION HOURS</h2>
          </div>
          <Divider hidden="true" />
          <div>
            <div className="field">
              <label>
                <h3>
                  {' '}
                  Day
                  {!this.state.day ? (
                    <div className="ui left pointing red basic label">
                      is required!
                    </div>
                  ) : (
                    <div className="ui left pointing green basic label">
                      is valid!
                    </div>
                  )}
                </h3>
              </label>
              <GenericDropdown
                labelProper="Choose Day of Consultation"
                value={this.state.day}
                handler={this.handleChangeDay}
                options={optionsDays}
              />
            </div>

            <div className="field">
              <label>
                <h3>
                  {' '}
                  Time From
                  {!this.state.consultation_start_time ? (
                    <div className="ui left pointing red basic label">
                      is required!
                    </div>
                  ) : (
                    <div className="ui left pointing green basic label">
                      is valid!
                    </div>
                  )}
                  <ConsultationDropdown
                    labelProper="Choose Start Time of Consultation"
                    value={this.state.consultation_start_time}
                    handler={this.handleChangeConsultation_start_time}
                    options={optionsTimeFrom}
                  />
                </h3>
              </label>
            </div>

            <div className="field">
              <label>
                <h3>
                  {' '}
                  Time To
                  {!this.state.consultation_end_time ? (
                    <div className="ui left pointing red basic label">
                      is required!
                    </div>
                  ) : (
                    <div className="ui left pointing green basic label">
                      is valid!
                    </div>
                  )}
                  <ConsultationHourSubTypeDropdown
                    value={this.state.consultation_end_time}
                    handler={this.handleChangeConsultation_end_time}
                    options={optionsTimeTo}
                    timeFromValue={this.state.timeFromValue}
                  />
                </h3>
              </label>
            </div>

            <div className="field">
              <label>
                <h3>
                  {' '}
                  Place
                  {!this.state.consultation_place ? (
                    <div className="ui left pointing red basic label">
                      is required!
                    </div>
                  ) : !this.state.consultation_place.match(placeRegex) ? (
                    <div className="ui left pointing red basic label">
                      should be valid!
                    </div>
                  ) : (
                    <div className="ui left pointing green basic label">
                      is valid!
                    </div>
                  )}
                </h3>
              </label>
              <div className="ui input fluid mini">
                <input
                  type="text"
                  value={this.state.consultation_place}
                  onChange={this.handleChangePlace}
                />
              </div>
            </div>

            <Divider hidden="true" />
          </div>
          <div className="ui center aligned container">
            <button className="ui blue button" onClick={this.startEdit}>
              Edit Consultation Hours
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
