import React from 'react';
// import UrlBuilder from './UrlBuilder';
import { ContactEmail, ContactEmail2 } from './ContactEmail';
import './Footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    // this.urlBuilder = new UrlBuilder();
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-message">
            <p>
              Contact us at <ContactEmail />, <ContactEmail2 />.
            </p>
            <p>
              We thank the <a href="https://lirobenchmark.github.io/about">LiRo team</a> for letting us adapt their{' '}
              <a href="https://lirobenchmark.github.io">leaderboard</a> interface.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
