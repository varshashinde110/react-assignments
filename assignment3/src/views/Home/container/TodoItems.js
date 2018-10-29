import React from 'react';
import { List } from '../../../components/List/List';

export class TodoItems extends React.PureComponent {
  render() {
    const todoEntries = this.props.entries;
    const { className, onClick } = this.props;
    return (
      <List>
        <div className="row">
          <div className="col-md-7 col-md-offset-2">
            <ul>
              {todoEntries.map(item => (
                <li className={className} key={item.key} onClick={() => onClick(item.key)}>{item.taskName}</li>
              ))}
            </ul>
          </div>
        </div>
      </List>
    );
  }
}
