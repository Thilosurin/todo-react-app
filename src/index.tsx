import React from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import initialData from "./initial-data";
import Column from "./column";
import { ColumnType, TasksType } from "./interface";

class App extends React.Component {
  state = initialData;

  render() {
    return this.state.columnOrder.map((columnId) => {
      const column: ColumnType = this.state.columns[columnId];
      const tasks: TasksType[] = column.taskIds.map(
        (taskId) => this.state.tasks[taskId]
      );
      return <Column key={column.id} column={column} tasks={tasks} />;
    });
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
