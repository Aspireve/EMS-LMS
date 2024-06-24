import { useState } from 'react';
import Column from './column';
import BurnBarrel from './burnbarrel';

type ColumnType = "backlog" | "todo" | "doing" | "done";

type CardType = {
    title: string;
    id: string;
    column: ColumnType;
  };

type BoardProps = {
    kanbanCards: CardType[]
};


const Board = ({kanbanCards}: BoardProps) => {
  const [cards, setCards] = useState(kanbanCards);

  return (
    <div
      style={{
        display: 'flex',
        height: '80vh',
        width: '100%',
        gap: '0.75rem',
        overflow: 'scroll',
        padding: '0',
      }}
    >
      <Column
        title="Backlog"
        column="backlog"
        headingColor="#800517"
        cards={cards}
        setCards={setCards}
        style={{
          flex: '1 1 0',
        }}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="#FF6E00"
        cards={cards}
        setCards={setCards}
        style={{
          flex: '1 1 0',
        }}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="#002D62"
        cards={cards}
        setCards={setCards}
        style={{
          flex: '1 1 0',
        }}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="#10B981"
        cards={cards}
        setCards={setCards}
        style={{
          flex: '1 1 0',
        }}
      />
      <BurnBarrel
        setCards={setCards}
        style={{
          flex: '0 1 auto',
        }}
      />
    </div>
  );
};

export default Board;
