import React from 'react';
import './styles/Card.scss';
import { Avatar } from '../../components/Avatar/Avatar';
// import { Button } from '../../components/Button/Button';

export class Card extends React.PureComponent {
  render() {
    // const { props } = this;
    return (
      <div className="row simple-card">
        <div className="col-md-12">
          <div className="col-md-2">
            <Avatar />
          </div>
          <div className="col-md-10">
            <div className="user-details row">
              <h1>Varun Srinivas</h1>
              <p>Profile URL: http://github.com/varun1505</p>
            </div>
            <div className="row">
              <div className="col-md-9">
                <p>Date One: Value One</p>
                <p>Date two: Value Two</p>
              </div>
              <div className="col-md-3">
                {/* <Button data-toggle="collapse" data-target="#demo"/> */}
                <button
                  type="button"
                  className="btn-lg btn-primary"
                  data-toggle="collapse"
                  data-target="#demo"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="demo" className="row collapse">
          <div className="col-md-8 col-md-offset-2">
            <div className="data-cell">
            <div className="col-md-6"><p>Data Label One</p></div>
            <div className="col-md-6"><p>Data Value One</p></div>
            </div>
            <div className="data-cell">
            <div className="col-md-6"><p>Data Label Two</p></div>
            <div className="col-md-6"><p>Data Value Two</p></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
