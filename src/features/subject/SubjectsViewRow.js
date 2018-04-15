import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
//import CellItem from './CellItem'
import { Modal } from 'semantic-ui-react';
import GenericDelete from './../GenericDelete';

export default class ViewSubjectsRow extends Component {
  render() {
    //Link to Edit page
    //Modal for Delete, fix this one
    return (
      <tr>
        <td class="center aligned"> {this.props.subjid} </td>
        <td class="center aligned"> {this.props.subjcode} </td>
        <td class="center aligned"> {this.props.seccode} </td>
        <td class="center aligned"> {this.props.type} </td>
        <td class="center aligned"> {this.props.gradcourse} </td>
        <td class="center aligned"> {this.props.units} </td>
        <td class="center aligned"> {this.props.room} </td>
        <td class="center aligned"> {this.props.starttime} </td>
        <td class="center aligned"> {this.props.endtime} </td>
        <td class="center aligned">
        <GenericDelete {...this.props}/>
        </td>
      </tr>
    );
  }
}