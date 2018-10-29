import React from 'react';
// import './styles/Button.scss';

export class Button extends React.PureComponent {
  render() {
    const { name, title, className } = this.props;
    return (
      <button className={className} onClick={this.props.onClick} name={name}>
        {title}
      </button>
    );
  }
}
