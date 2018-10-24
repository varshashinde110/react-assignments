import React from 'react';
import './styles/Card.scss';


export class Card extends React.PureComponent {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
