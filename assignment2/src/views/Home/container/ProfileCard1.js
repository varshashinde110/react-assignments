import React, { Fragment } from 'react';
import { Card } from '../../../containers/Card/Card';
import { Avatar } from '../../../components/Avatar/Avatar';
import { Button } from '../../../components/Button/Button';
import { SimpleTable } from '../../../components/SimpleTable/SimpleTable';
import { Label } from '../../../components/Label/Label';
import { MenuBar } from '../../../components/MenuBar/MenuBar';
import { SelectBox } from '../../../components/SelectBox/SelectBox';
import { InputBox } from '../../../components/InputBox/InputBox';
import Pagination from '../../../components/Pagination/Pagination';

export default class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      totalCount: 0,
      username: '',
      showData: false,
      currentUsers: [],
      currentPage: null,
      totalPages: null,
      initialPage: 1
    };
  }

  onPageChanged = (users) => {
    const { currentPage, totalPages, pageLimit } = users;
    console.log(currentPage); //eslint-disable-line
    this.setState({ currentPage }, () =>
      this.fetchData(this.state.username, currentPage));
    const { data } = this.state;
    const offset = (currentPage - 1) * pageLimit;
    const currentUsers = data.slice(offset, offset + pageLimit);

    this.setState({
      currentPage,
      currentUsers,
      totalPages,
      showData: true
    });
  };

  fetchData = (username, page) => {
    fetch(`https://api.github.com/search/users?q=${username}&page=${page}`)
      .then(response => response.json())
      .then(
        result =>
          this.setState({
            isLoading: true,
            data: result.items,
            currentUsers: result.items,
            totalCount: result.total_count,
            showData: true,
            page
          }),
        (error) => {
          throw error;
          this.setState({ isLoading: true }); //eslint-disable-line
        }
      )
      .catch(error => console.log("There is an error")); //eslint-disable-line
  };

  handleChange = (username) => {
    this.setState({ username }, () =>
      this.fetchData(username, this.state.initialPage));
  };

  handleSorting = (key) => {
    this.setState({ key });
    const data = this.state.data;
    data.sort((a, b) => a.key - b.key).reverse();
    this.setState({ data });
  };

  render() {
    const {
      isLoading,
      totalCount,
      showData,
      currentUsers,
      currentPage,
      totalPages
    } = this.state;

    if (!isLoading) return <div>Loading...</div>;
    return (
      <Fragment>
        <header className="parallax-header">
          <div className="container">
            <MenuBar>
              <div className="col-md-6 form-group">
                <SelectBox>
                  <select
                    className="form-control"
                    onChange={e => this.handleSorting(e.target.value)}
                  >
                    <option value={this.state.data.login}>Sort By Name Ascending</option>
                    <option value={this.state.data.login}>Sort By Name Descending</option>
                    <option value="rankasc">Sort By Rank Ascending</option>
                    <option value="rankdsc">Sort By Rank Descending</option>
                  </select>
                </SelectBox>
              </div>
              <div className="col-md-6 form-group">
                <InputBox
                  name="username"
                  type="text"
                  placeholder="username"
                  onChange={e => this.handleChange(e.target.value)}
                />
              </div>
            </MenuBar>
          </div>
        </header>
        <section>
          <div className="content container">
            {showData && <Label resultsCount={totalCount} />}
            <Card>
              {currentUsers.map(user => (
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
          <div>
            {currentPage && (
              <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                Page <span className="font-weight-bold">{currentPage}</span> /{' '}
                <span className="font-weight-bold">{totalPages}</span>
              </span>
            )}
          </div>
          {showData && (
            <Pagination
              totalRecords={totalCount}
              pageLimit={30}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
          )}
        </section>
      </Fragment>
    );
  }
}
