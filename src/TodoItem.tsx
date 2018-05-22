import * as React from 'react';

interface Props {
  title: string;
}

class TodoItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <li>
        {this.props.title}
      </li>
    );
  }
}

export default TodoItem;
