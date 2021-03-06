import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ViewTeachingLoadRow from './TeachingLoadViewRow';
import NavBar from './../ui/NavBarAdmin';

//Dummy data
const dummySample = {
  seccode: 'CMSC 128',
  room: 'CAS B04',
  days: 'T-Th',
  starttime: '4pm',
  endtime: '7pm',
  hours: '3',
  studnum: '49',
  creditwo: '3',
  studcred: '3',
  creditw: ' 3'
};

const dummySample2 = {
  seccode: 'CMSC 127',
  room: 'CAS B04',
  days: 'T-Th',
  starttime: '4pm',
  endtime: '7pm',
  hours: '3',
  studnum: '49',
  creditwo: '3',
  studcred: '3',
  creditw: ' 3'
};

const dummySample3 = {
  seccode: 'CMSC 129',
  room: 'CAS B04',
  days: 'T-Th',
  starttime: '4pm',
  endtime: '7pm',
  hours: '3',
  studnum: '49',
  creditwo: '3',
  studcred: '3',
  creditw: ' 3'
};

export default class ViewTeachingLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // data : []
      data: [dummySample, dummySample2, dummySample3] //dummmy data
    };

    this.startAdd = this.startAdd.bind(this);
  }

  // componentDidMount(){
  //   e.preventDefault();
  //   Api.ViewTeachingLoad({
  //   })
  //     .then(result => {
  //       this.setState({ data: result});
  //     })
  //     .catch(e => alert('Error loading Publications!!'));
  // }

  startAdd() {
    this.props.history.push('../teachingload/add');
  }

  render() {
    return (
      <div classNameName="App-header">
        <div>
          <NavBar {...this.props} Label="edit" subLabel="teachingload" />
        </div>
        <div classNameName="bodydiv">
          <div
            className="ui compact piled very padded text left aligned container segment mainDiv"
            color="teal">
            <div>
              <h1 className="ui blue header">TEACHING LOAD</h1>
            </div>
            <Divider hidden="true" />

            <style>
              {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
            </style>
            <table className="ui celled table">
              <thead>
                <tr>
                  <th className="center aligned"> Section Code </th>
                  <th className="center aligned"> Room </th>
                  <th className="center aligned"> Days </th>
                  <th className="center aligned"> Start Time </th>
                  <th className="center aligned"> End Time </th>
                  <th className="center aligned"> Hours Per Week </th>
                  <th className="center aligned"> No. Of Students </th>
                  <th className="center aligned"> Course Credit </th>
                  <th className="center aligned"> Student Credit Units </th>
                  <th className="center aligned">
                    {' '}
                    Teaching load credits with Multiplier{' '}
                  </th>
                  <th className="center aligned"> Edit/Delete </th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(item => {
                  return (
                    <ViewTeachingLoadRow
                      {...this.props}
                      subj={item.subj}
                      seccode={item.seccode}
                      room={item.room}
                      days={item.days}
                      starttime={item.starttime}
                      endtime={item.endtime}
                      hours={item.hours}
                      studnum={item.studnum}
                      creditwo={item.creditwo}
                      studcred={item.studcred}
                      creditw={item.creditw}
                      editURL="../teachingload/edit"
                      label="Teaching Load"
                      subLabel="teaching load"
                    />
                  );
                })}
              </tbody>
            </table>
            <button
              className="ui blue right floated button"
              onClick={this.startAdd}>
              Add Teaching Load
            </button>
            <Divider hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}
