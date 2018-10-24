import React from 'react';
// import './styles/Label.scss';

export class Button extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <button
        type={props.type}
        className={props.className}
        data-toggle={props.dataToggle}
        data-target={props.dataTarget}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    );
  }
}
