import { Component } from "react";
import { RouteComponentProps } from "@reach/router";
import { ColumnType, TasksType } from "./interface";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h3``;
const TaskList = styled.div``;

export default class Column extends Component<
  RouteComponentProps<{ key: string; column: ColumnType; tasks: TasksType[] }>
> {
  render() {
    return (
      <Container>
        <Title>{this.props.column?.title}</Title>
        <TaskList></TaskList>
      </Container>
    );
  }
}
