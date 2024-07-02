import React, { useState, SetStateAction, Dispatch, DragEvent, CSSProperties } from 'react';
import Card from './card';
import DropIndicator from './dropindicator';
import AddCard from './addcard';

type ColumnType = "backlog" | "todo" | "doing" | "done";

type CardType = {
    title: string;
    id: string;
    column: ColumnType;
  };

type ColumnProps = {
    title: string;
    cards: CardType[];
    column: ColumnType;
    setCards: Dispatch<SetStateAction<CardType[]>>;
    style: CSSProperties;
    backgroundColor: string;
    numberColor: string;
  };

const Column = ({
  title,
  numberColor,
  cards,
  backgroundColor,
  column,
  setCards,
  style
}: ColumnProps) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: React.DragEvent<Element>, card: CardType) => {
    e.dataTransfer?.setData("cardId", card.id);
  };

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer?.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        console.log(cardToTransfer)
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e: DragEvent) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(
      document.querySelectorAll(
        `[data-column="${column}"]`
      ) as unknown as HTMLElement[]
    );
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div style={{ ...style, minWidth: "25%" }}>
      <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: "1rem" }}>
        <h3 style={{padding: 0, margin: 0, fontWeight: "700", fontSize: "1.2rem"}}>{title}</h3>
        <span style={{ fontSize: '0.875rem', backgroundColor: backgroundColor, height: "2rem", width: "2rem", display:"flex", alignItems: "center", justifyContent: "center", color: numberColor, fontWeight: "600", borderRadius: "50%" }}>
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        style={{
          width: '100%',
          transition: 'background-color 0.2s',
          backgroundColor: active ? '#B0C4DE55' : 'rgba(31, 41, 55, 0)',
        }}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

export default Column;
