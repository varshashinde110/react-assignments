import React from 'react';
import './styles/MenuBar.scss';

export class MenuBar extends React.Component {
  render() {
    return (
      <section className="header-menu">
        <div className="container">
            <h1 className={this.props.className}>{this.props.title}</h1>
        </div>
      </section>
    );
  }
}
