import React, { Fragment } from 'react';
import { Card } from '../../../containers/Card/Card';
import { Avatar } from '../../../components/Avatar/Avatar';
import { Button } from '../../../components/Button/Button';
import { SimpleTable } from '../../../components/SimpleTable/SimpleTable';
import { Label } from '../../../components/Label/Label';
import { MenuBar } from '../../../components/MenuBar/MenuBar';
import { SelectBox } from '../../../components/SelectBox/SelectBox';
import { InputBox } from '../../../components/InputBox/InputBox';

export default class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      data: [],
      totalCount: 0,
      username: '',
      showCount: false
    };
  }
  handleChange = (username) => {
    this.setState({ username }, () => {
      fetch(`https://api.github.com/search/users?q=${this.state.username}`)
        .then(res => res.json())
        .then(
          result =>
            this.setState({
              isLoading: true,
              data: result.items,
              totalCount: result.total_count,
              showCount: true
            }),
          error => this.setState({ isLoading: true, error })
        );
    });
  };

  handleSorting = (key) => {
    this.setState({ key });
    const data = this.state.data;
    data.sort((a, b) => a.key - b.key);  
    this.setState({ data });
  }

  render() {
    const {
 error, isLoading, data, totalCount, showCount 
} = this.state;
    if (error) return <div>Error : {error.message}</div>;
    else if (!isLoading) return <div>Loading...</div>;
    return (
      <Fragment>
        <header className="parallax-header">
          <div className="container">
            <MenuBar>
             <div className="col-md-6 form-group">
             <SelectBox>
             <select className="form-control" onChange={e => this.handleChange(e.target.value)}>
              <option value="name">Sort By Name</option>
              <option value="id">Sort By Id</option>
              <option value="score">Sort By Score</option>
             </select>
             </SelectBox>
             </div>
           <div className="col-md-6 form-group">
             <InputBox
              name="username"
              type="text"
              placeholder="username"
              onChange={e => this.handleChange(e.target.value)} />
           </div>
            </MenuBar>
          </div>
        </header>
        <section>
          <div className="content container">
            {showCount && <Label resultsCount={totalCount} />}
            <Card>
              {data.map(user => (
                <div className="row simple-card" key={user.id}>
                  <div className="col-md-12">
                    <div className="col-md-2">
                      <Avatar imagedata={user.avatar_url} />
                    </div>
                    <div className="col-md-10">
                      <div className="user-details row">
                        <h1>{user.login}</h1>
                        <p>Profile URL: {user.html_url}</p>
                      </div>
                      <div className="row">
                        <div className="col-md-9">
                          <p>User Score : {user.score}</p>
                          <p>Node ID : {user.node_id}</p>
                        </div>
                        <div className="col-md-3">
                          <Button
                            type="button"
                            className="btn-lg btn-primary"
                            dataToggle="collapse"
                            dataTarget={`#${user.id}`}
                            title="Details"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id={user.id} className="row collapse">
                    <div className="col-md-12">
                      <SimpleTable>
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <td>User ID</td>
                              <td>{user.id}</td>
                            </tr>
                            <tr>
                              <td>User Name</td>
                              <td>{user.login}</td>
                            </tr>
                            <tr>
                              <td>User Score</td>
                              <td>{user.score}</td>
                            </tr>
                          </tbody>
                        </table>
                      </SimpleTable>
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </section>
      </Fragment>
    );
  }
}
