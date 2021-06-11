import React from 'react';
import { AuthConsumer } from './AuthContext';
import { Link } from 'react-router-dom';

const headerStyle = {
  display: 'flex',
  backgroundColor: '#26c6da',
  justifyContent: 'space-between',
  padding: 10
}

const linkStyle = {
  color: 'white',
  textDecoration: 'underline'
}

const HeaderBar = () => (
  <header>
    <AuthConsumer>
      {({ isAuthenticated, login, logout }) => (
        <div style={headerStyle}>
          <h3>
            <Link style={linkStyle} to="/landing">Landing</Link>
            {' '}
            <Link style={linkStyle} to="/about">About</Link>
            {' '}
            <Link style={linkStyle} to="/contact">Contact</Link>
            {' '}
            <Link style={linkStyle} to="/dashboard">Dashboard</Link>
            {' '}
          </h3>

          {isAuthenticated ? (
            <ul>
              <Link style={linkStyle} to="/intro">
                Intro
              </Link>
              <button onClick={logout}>Logout</button>
            </ul>
          ) : (
            <button onClick={login}>Login</button>
          )}
        </div>
      )}
    </AuthConsumer>
  </header>
);

export default HeaderBar;
