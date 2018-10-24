import React from 'react';
import './styles/Label.scss';

export class Label extends React.PureComponent {
  render() {
    const { props } = this;
    return (
        <div className="row">
          <div className="col-md-12">
            <p className="Simple-label">
              <strong>Total Results: {props.resultsCount}</strong>
            </p>
          </div>
        </div>
    );
  }
}
