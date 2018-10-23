import React, { PureComponent } from 'react';

export class SimpleTable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  compareBy(key) {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      else return 0;
    };
  }
  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ data: arrayCopy });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="Main-Content">
        <table border="1" cellPadding="30" cellSpacing="5">
          <thead>
            <tr>
              <th onClick={() => this.sortBy("id")}>ID</th>
              <th onClick={() => this.sortBy("first_name")}>First Name</th>
              <th onClick={() => this.sortBy("last_name")}>Last Name</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                  <img src={user.avatar} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
