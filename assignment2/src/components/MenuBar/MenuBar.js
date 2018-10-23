import React from 'react';
import './styles/MenuBar.scss';
import { SelectBox } from '../SelectBox/SelectBox';
import { InputBox } from '../InputBox/InputBox';

export class MenuBar extends React.PureComponent {
  render() {
    // const { props } = this;
    return (
      <div className="header-menu">
        <div className="row">
          <div className="col-md-6 form-group">
            <SelectBox />
          </div>
          <div className="col-md-6 form-group">
            <InputBox />
          </div>
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}
