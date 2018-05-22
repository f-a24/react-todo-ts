import * as React from 'react';

interface Props {
  addTodo: (title: string) => void;
}
interface States {
  inputValue: string;
}

class TodoInput extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e: React.FormEvent<HTMLInputElement>): void {
    this.setState({inputValue: e.currentTarget.value});
  }
  // handleClick(e: React.MouseEvent<HTMLElement>): void {  // memo
  //   e.preventDefault();
  handleClick(): void {
    const inputValue = this.state.inputValue;
    this.props.addTodo(inputValue);
  }
  render() {
    return (
      <div className="TodoInput">
        <input type="text" placeholder="新規TODOを入力してください" value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleClick}>登録</button>
      </div>
    );
  }
}

export default TodoInput;
