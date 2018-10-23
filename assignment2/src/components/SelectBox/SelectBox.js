import React from 'react';

export class SelectBox extends React.Component {
  render() {
    return (
      <select className="form-control">
        <option>Sort By Name</option>
        <option>Sort By Id</option>
        <option>Sort By Score</option>
        {/* <i className="fa fa-down-arrow form-control-feedback" /> */}
      </select>
    );
  }
}
