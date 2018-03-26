import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: this.props.Label,
      subMenu: this.props.subLabel
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmenus = this.handleSubmenus.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ activeMenu: e.target.id});
    if(this.state.activeMenu==='profile'){
        this.props.history.push('../../profile');
        this.forceUpdate();
    }
  }

  handleSubmenus(e) {
    e.preventDefault();
    this.setState({ subMenu: e.target.id });
    if(this.state.subMenu==='teachingload'){
        this.props.history.push('../../teachingload/view');
    }else if(this.state.subMenu==='publications'){
        this.props.history.push('../../publications/view');
    }else if(this.state.subMenu==='adminwork'){
        this.props.history.push('../../adminwork/view');
    }else if(this.state.subMenu==='extension'){
        this.props.history.push('../../extension/view');
    }else if(this.state.subMenu==='studyload'){
        this.props.history.push('../../studyload/view');
    }else if(this.state.subMenu==='profession'){
        this.props.history.push('../../profession/view');
    }else if(this.state.subMenu==='profchair'){
        this.props.history.push('../../professorialchair/view');
    }else if(this.state.subMenu==='consultation'){
        this.props.history.push('../../consultation/view');
    }
    this.forceUpdate();
  }

  render() {
      if(this.state.activeMenu==='profile'){
        return(
         <div>
          <div class="ui huge tabular menu">
              <a class="active item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <a class="ui item" onClick={this.handleLogout}>
                Logout
              </a>
            </div>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='teachingload'){
        return(
        <div>
          <div class="ui huge tabular menu">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <a class="ui item" onClick={this.handleLogout}>
                Logout
              </a>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container flex-container">
            <a id="teachingload" class="item active" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='publications'){
        return(
        <div>
          <div class="ui huge tabular menu">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <a class="ui item" onClick={this.handleLogout}>
                Logout
              </a>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item active" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='adminwork'){
        return(
        <div>
          <div class="ui huge tabular menu">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <a class="ui item" onClick={this.handleLogout}>
                Logout
              </a>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item active" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='extension'){
        return(
        <div>
          <div class="ui huge tabular menu">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <a class="ui item" onClick={this.handleLogout}>
                Logout
              </a>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item active" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='studyload'){
        return(
        <div>
          <div class="ui huge tabular menu">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <a class="ui item" onClick={this.handleLogout}>
                Logout
              </a>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item active" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='profession'){
        return(
        <div>
          <div class="ui huge tabular menu">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <a class="ui item" onClick={this.handleLogout}>
                Logout
              </a>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item active" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='profchair'){
        return(
        <div>
          <div class="ui huge tabular menu">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <a class="ui item" onClick={this.handleLogout}>
                Logout
              </a>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item active" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
          </div>
        </div>
        )
      }else{
        return(
        <div>
          <div class="ui huge tabular menu">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <a class="ui item" onClick={this.handleLogout}>
                Logout
              </a>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item active" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
          </div>
        </div>
        )
      }
  }
}
//=========================
ReactDOM.render(<NavBar />, document.getElementById('root'));