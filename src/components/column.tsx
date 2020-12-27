import { Component } from "react";
import { RouteComponentProps } from "@reach/router";
import { ColumnType, TasksType } from "../types/interface";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "./task";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;

interface TaskListProps {
  isDraggingOver: boolean;
}
const TaskList = styled.div<TaskListProps>`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;

class InnerList extends Component<RouteComponentProps<{ tasks: TasksType[] }>> {
  shouldComponentUpdate(nextProps: { tasks: TasksType[] }) {
    return !(nextProps.tasks === this.props.tasks);
  }
  render() {
    return this.props.tasks?.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ));
  }
}

export default class Column extends Component<
  RouteComponentProps<{
    key: string;
    index: number;
    column: ColumnType;
    tasks: TasksType[];
    isDropDisabled: boolean;
  }>
> {
  render() {
    return (
      <Draggable
        draggableId={this.props.column?.id as string}
        index={this.props.index as number}
      >
        {(provided) => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Title {...provided.dragHandleProps}>
              {this.props.column?.title}
            </Title>
            <Droppable
              droppableId={this.props.column?.id as string}
              type="task"
            >
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList tasks={this.props.tasks} />
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}
