import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import DeleteModal from './GenericDelete';

export default class ViewSubjectsRow extends Component {
  render() {
    //Link to Edit page
    //Modal for Delete, fix this one
    return (
      <tr>
        
        <td className="center aligned"> {this.props.subjcode} </td>
        <td className="center aligned"> {this.props.seccode} </td>
        <td className="center aligned"> {this.props.type} </td>
        <td className="center aligned"> {this.props.gradcourse} </td>
        <td className="center aligned"> {this.props.units} </td>
        <td className="center aligned"> {this.props.room} </td>
        <td className="center aligned">
        {
            this.props.days.map(item=>{
                return(
                    <span> {item} </span>
                )
            })
        }
        </td>
        <td className="center aligned"> {this.props.starttime} </td>
        <td className="center aligned"> {this.props.endtime} </td>
        <td className="center aligned">
        <DeleteModal {...this.props}/>
        </td>
      </tr>
    );
  }
}
