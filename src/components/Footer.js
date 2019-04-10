import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p><Link to="/new"><FontAwesomeIcon icon="plus-circle" className="plus-icon" /></Link></p>
      </div>
    );
  }
}

export default Footer;