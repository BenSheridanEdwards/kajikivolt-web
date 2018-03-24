import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="small-12 columns">
            <p className="slogan"><i>"it's a meltdown, hellbound, drag strip riot...cross town"</i></p>
            <div className="logo"><img src="img/logo/logo_white.png" width="60" height="60" alt=""/></div>
            <p className="copyright">&copy; Kajiki Volt</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;