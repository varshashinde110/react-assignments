import React from 'react';
import './styles/MenuBar.scss';

export class MenuBar extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <div className="header-menu">
        <div className="row">
         {props.children}
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}
