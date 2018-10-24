import React from 'react';

export class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }
  render() {
    const { props } = this;
    return (
      <div className="form-group">
        <input
          className="form-control"
          value={props.value}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          name={props.name}
        />
        <i className="fa fa-search form-control-feedback" />
      </div>
    );
  }
}
