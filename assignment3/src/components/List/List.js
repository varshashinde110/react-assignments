import React from 'react';
import './styles/List.scss';

export class List extends React.PureComponent {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
