import { RouteComponentProps } from "@reach/router";
import { Component } from "react";
import { TasksType } from "../types/interface";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

interface ContainerProps {
  isDragging: boolean;
  isDragDisabled: boolean;
}
const Container = styled.div<ContainerProps>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "lightgreen"
      : "white"};
  display: flex;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

export default class Task extends Component<
  RouteComponentProps<{ id: string; task: TasksType; index: string | number }>
> {
  render() {
    const isDragDisabled = this.props.task?.id === "task-1";
    return (
      <Draggable
        draggableId={this.props.task?.id as string}
        index={this.props.index as number}
        isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
            aria-roledescription="Test to using a voice suggestion"
          >
            <Handle {...provided.dragHandleProps} />
            {this.props.task?.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
