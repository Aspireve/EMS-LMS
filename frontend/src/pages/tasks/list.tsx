import React from "react";
import {
  KanbanBoard,
  KanbanBoardContainer,
} from "../../components/tasks/kanban/board";
import KanbanColumn from "../../components/tasks/kanban/column";

const List = () => {
  return (
    <KanbanBoardContainer>
      <KanbanBoard>
        <KanbanColumn>
            
        </KanbanColumn>
      </KanbanBoard>
    </KanbanBoardContainer>
  );
};

export default List;