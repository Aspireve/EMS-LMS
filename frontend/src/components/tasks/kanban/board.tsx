import { useState } from 'react';
import Column from './column';

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
        width: '100%',
        gap: '2rem',
        padding: '2rem 0',
        overflowX: "scroll"
      }}
    >
      <Column
        title="Backlog Tasks"
        column="backlog"
        numberColor='#d5a540'
        cards={cards}
        backgroundColor="#f6f0e1"
        setCards={setCards}
      />
      <Column
        title="Todo Tasks"
        column="todo"
        backgroundColor='#f6e6f0'
        numberColor='#e04d8f'
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In Process"
        column="doing"
        backgroundColor='#efe8fa'
        numberColor='#a55aed'
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Done"
        column="done"
        backgroundColor="#e1f3e9"
        numberColor='#67bf84'
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

export default Board;
