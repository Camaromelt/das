import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
  }
  isActive(tab, location) {
    return location === tab ? 'active link' : 'link';
  }
  render() {
    const location = window.location.pathname;
    return (
        <header>
          <div className="user">
            <div className="avatar">
            <img src={this.props.user.userImage} alt="Avatar" />
            </div>
            <div className="username">
            {this.props.user.userName}
            </div>
            <hr />
          </div>
          <ul>
            <li className={this.isActive('/', location)}><Link to="/" >Home</Link></li>
            <li className={this.isActive('/stories', location)}><Link to="stories" >Stories</Link></li>
            <li className={this.isActive('/users', location)}><Link to="users" >Users</Link></li>
            <li className={this.isActive('/submissions', location)}><Link to="submissions" >Submissions</Link></li>
          </ul>
        </header>
    );
  }
};

export default Header;
