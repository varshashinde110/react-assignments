import React from 'react';
import './styles/Input.scss';

export class Input extends React.PureComponent {
  render() {
    const {
      className,
      value,
      inputType,
      name,
      placeholder,
    } = this.props;
    return (
      <input
        className={className}
        value={value}
        type={inputType}
        placeholder={placeholder}
        onChange={this.props.onChange}
        name={name}
      />
    );
  }
}
