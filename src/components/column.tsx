import { Component } from "react";
import { RouteComponentProps } from "@reach/router";
import { ColumnType, TasksType } from "../types/interface";
import { Droppable } from "react-beautiful-dnd";
import Task from "./task";
import styled from "styled-components";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

export default class Column extends Component<
  RouteComponentProps<{ key: string; column: ColumnType; tasks: TasksType[] }>
> {
  render() {
    return (
      <Container>
        <Title>{this.props.column?.title}</Title>
        <Droppable droppableId={this.props.column?.id as string}>
          {(provided) => (
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.tasks?.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}
