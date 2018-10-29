import React from 'react';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';

export class TodoBox extends React.PureComponent {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="row todo-box">
        <div className="col-md-6 col-md-offset-2">
          <Input
            type="text"
            value={value}
            className="inputBox"
            name="todo"
            placeholder="Task"
            onChange={e => onChange(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <Button
            type="submit"
            className="btn-add"
            name="add-todo"
            title="Add Task"
            onClick={this.props.onClick}
          />
        </div>
      </div>
    );
  }
}
