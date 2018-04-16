import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';

export default class GenericDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
    this.startDelete = this.startDelete.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  startEdit(e) {
    e.preventDefault();
    this.props.history.push({
        pathname: this.props.editURL,
        state: {id: this.props.id}
      });
    this.props.history.push(this.props.editURL, {id: this.props.id});
  }

  componentDidMount(){
    if(typeof this.props.history!=='undefined'){
        this.setState({id: this.props.id});
        console.log(this.props.id);
    }
  }

  startDelete(e){
    Api.deleteTeachLoad({
      teachingload_id: this.props.id
    })
      .then(result => {
        window.location.reload();
        alert('Successfully deleted!');
      })
      .catch(e => alert('Error deleting row!'));
    this.props.history.push(this.props.deleteURL, {id: this.props.id});
    this.close();
  }

  render() {
    const { open, size } = this.state

    return (
      <div>
        <button class="ui left attached compact icon button" onClick={this.startEdit}>
          <i class="edit icon"> </i>
        </button>
          
        <button class = "ui right attached compact icon button" onClick={this.show('mini')}>
        <i class="trash alternate icon" />
        </button>
        <Modal size={size} open={open} onClose={this.close} style={{marginTop: "18%", marginLeft: "40%"}}>
          <Modal.Header>
            {this.props.label}
          </Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete this {this.props.subLabel}?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>
              No
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.startDelete}/>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

//=========================
ReactDOM.render(<GenericDelete />, document.getElementById('root'));
