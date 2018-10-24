import React from 'react';

export class SelectBox extends React.Component {
  render() {
    return (
      <React.Fragment>{this.props.children}</React.Fragment>
    );
  }
}
