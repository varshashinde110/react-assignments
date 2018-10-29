import React, { Fragment } from 'react';
import { MenuBar } from '../../../components/MenuBar/MenuBar';
import { TodoItems } from './TodoItems';
import { TodoBox } from './TodoBox';
import '../styles/Home.scss';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentTask: {
        taskName: '',
        key: ''
      }
    };
  }

  handleChange = (taskName) => {
    const currentTask = { taskName, key: Date.now() };
    this.setState({ currentTask });
  };

  addItems = () => {
    if (
      this.state.currentTask.taskName !== '' &&
      this.state.currentTask.taskName !== null
    ) {
      const newTask = this.state.currentTask;
      if (newTask !== '') {
        const tasks = [...this.state.tasks, newTask];
        this.setState({
          tasks,
          currentTask: {
            taskName: '',
            key: ''
          }
        });
      }
    }
  };

  removeItems = (key) => {
    const tasksRemoved = this.state.tasks.filter((item) => {
      return item.key !== key;
    });
    this.setState({
      tasks: tasksRemoved
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <Fragment>
        <header className="container-fluid">
          <MenuBar title={this.props.title} className="menubar-title" />
        </header>
        <section className="container content">
          <div className="row todo-box">
            <TodoBox
              onChange={this.handleChange}
              onClick={this.addItems}
            />
          </div>
          <TodoItems
            className="todo-list"
            entries={tasks}
            onClick={this.removeItems}
          />
        </section>
      </Fragment>
    );
  }
}
