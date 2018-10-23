import React, { Fragment } from 'react';
import './styles/Home.scss';
import { MenuBar } from '../../components/MenuBar/MenuBar';
import { Label } from '../../components/Label/Label';
import { Card } from '../../containers/Card/Card';

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // btnClick = () => {
  //     console.log('hi user');
  // }

  render() {
    return (
      <Fragment>
        <header className="parallax-header">
          <div className="container">
            <MenuBar />
          </div>
        </header>
        <section>
          <div className="content container">
            <Label />
            <br />
            <Card />
          </div>
        </section>
      </Fragment>
    );
  }
}
