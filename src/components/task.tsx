import { RouteComponentProps } from "@reach/router";
import { Component } from "react";
import { TasksType } from "../types/interface";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

export default class Task extends Component<
  RouteComponentProps<{ id: string; task: TasksType; index: string | number }>
> {
  render() {
    return (
      <Draggable
        draggableId={this.props.task?.id as string}
        index={this.props.index as number}
      >
        {(provided) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.task?.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
