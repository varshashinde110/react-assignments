import React from 'react';

export class InputBox extends React.Component {
  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Username"
        />
        <i className="fa fa-search form-control-feedback" />
      </div>
    );
  }
}
