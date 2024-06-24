import React, { useState, DragEvent, Dispatch, SetStateAction, CSSProperties } from 'react';
import { FiTrash } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';

type ColumnType = "backlog" | "todo" | "doing" | "done";

type CardType = {
  title: string;
  id: string;
  column: ColumnType; // Assuming column type here for illustration
};

const BurnBarrel = ({
  setCards,
  style
}: {
  setCards: Dispatch<SetStateAction<CardType[]>>;
  style: CSSProperties
}) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((pv) => pv.filter((c) => c.id !== cardId));

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      style={{
        marginTop: '10px',
        gridArea: '1 / 1 / span 1 / span 1',
        height: '14rem',
        width: '14rem',
        display: 'grid',
        placeContent: 'center',
        borderRadius: '0.375rem',
        borderWidth: '2px',
        fontSize: '2rem',
        cursor: 'pointer',
        borderColor: active ? '#EF4444' : '#9CA3AF',
        backgroundColor: active ? 'rgba(239, 68, 68, 0.2)' : 'rgba(156, 163, 175, 0.2)',
        color: active ? '#EF4444' : '#9CA3AF',
        ...style
      }}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};

export default BurnBarrel;
