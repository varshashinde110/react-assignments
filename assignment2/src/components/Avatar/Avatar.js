import React from 'react';
// import './styles/Label.scss';
// import UserAvatar from '../../assets/images/user.png';

export class Avatar extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <img className="img-responsive img-circle" src={`${props.imagedata}`} alt="user-avatar" /> // eslint-disable-line
    );
  }
}
