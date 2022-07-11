import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LogoIcon, CodeIcon } from '../assets/icons';
import '../assets/menu.scss';
import UrlBuilder from './UrlBuilder';
import './Header.scss';

const Header = () => (
  <Navbar collapseOnSelect expand="lg">
    <div className="logo-wrapper">
      <Navbar.Brand href="/">
        <LogoIcon />
      </Navbar.Brand>
    </div>
    <Navbar.Toggle aria-controls="menu-responsive" />
    <Navbar.Collapse id="menu-responsive" className="justify-content-end">
      <Nav>
        <Nav.Link href="/">Tasks</Nav.Link>
        <Nav.Link href={UrlBuilder.datasetsPageUrl}>Datasets</Nav.Link>
        <Nav.Link href={UrlBuilder.submitPageUrl}>Submit</Nav.Link>
        <Nav.Link href={UrlBuilder.aboutPageUrl}>About</Nav.Link>
        <Nav.Link href="https://arxiv.org/abs/2207.03477" target="_blank" rel="noopener noreferrer">
          Paper
        </Nav.Link>
        <Nav.Link
          className="code-btn"
          href="https://github.com/veridark/veridark.github.io"
          target="_blank"
          rel="noopener noreferrer"
          id="code-btn"
        >
          <CodeIcon />
          <span>GitHub</span>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
