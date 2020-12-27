// onDragStart
export const start = {
  draggableId: "task-1",
  type: "TYPE",
  source: {
    droppableId: "column-1",
    index: 0,
  },
};

// onDragUpdate
export const update = {
  ...start,
  destination: {
    droppableId: "column-1",
    index: 1,
  },
};

// onDragEnd
export const result = {
  ...update,
  reason: "DROP",
};
