import * as React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

const logo = require('./logo.svg');

interface Props {}
interface States {
  tasks: {
    title: string,
    id: number
  }[];
  uniqueId: number;
}

class App extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tasks: [{
        title: 'デフォルトTODO',
        id: 0
      }],
      uniqueId: 1
    };
    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  addTodo (title: string): void {
    const {tasks, uniqueId} = this.state;
    tasks.push({title, id: uniqueId});
    this.setState({tasks, uniqueId: uniqueId + 1});
  }

  resetTodo(): void {
    this.setState({tasks: []});
  }

  // <TodoInput addTodo={(title: string) => {this.addTodo(title)}} />  memoz
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TODO App</h1>
        </header>
        <button onClick={this.resetTodo}>リセット</button>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
