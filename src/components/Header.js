import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions/AuthActions';
import PropTypes from 'prop-types';
class Header extends React.Component{

  constructor(props){
    super(props);
    this.logOut=this.logOut.bind(this);
    this.state={
    loggedInUser:''
    }
  }

  componentWillMount(){
    this.setState({
      loggedInUser:this.props.auth.user
    })
  }

  logOut(e){
    e.preventDefault();
    this.props.logOut();
  }

  render()
  {
    var {isAuthenticated,user}=this.props.auth;
    var userData = JSON.parse(localStorage.getItem('user')) || {};
    const superUserLinks=(
      <li className="nav-item ">
        {/*<Link className="nav-link btn btn-outline-primary btn-sm" to="/addModerator">AddModerator</Link>*/}
        <Link className="nav-link btn btn-outline-primary btn-sm" to="/addModerator">AddModerator</Link>
      </li>
    );
    const userLinks=(
      <li className="nav-item">
      </li>
    );
    return (

        <div className="container-fluid noPadding  ">
            <nav className="navbar navbar-expand-lg mainNavbar fixed-top">
              <Link className="navbar-brand" to="/admindashboard">
              <img src="img/fitnesslogo.png" alt="Torzo Gym" width="135px" height="80px" />
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                  {userData.role == "SuperUser" ? superUserLinks : userLinks}
                  <li className="nav-item ">
                    <a className="nav-link disabled" href="#"><span>Hi,
                      <span className="loggedInUserName" > {userData.firstname}</span>
                     </span>
                    </a>
                  </li>
                  {isAuthenticated &&
                  <li className="nav-item text-center outline ">
                    <a className="nav-link text-danger " href="#"
                    onClick={this.logOut}
                    >
                    <h6><i className="fa fa-power-off" aria-hidden="true"></i></h6>
                    Logout
                    </a>
                  </li>
                   }
                </ul>
              </div>
            </nav>
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

Header.propTypes={
  logOut:PropTypes.func.isRequired
}

export default connect(mapStateToProps,{logOut})(Header);
