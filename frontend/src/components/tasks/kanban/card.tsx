import React, { DragEvent } from 'react';
import { motion } from 'framer-motion';
import DropIndicator from './dropindicator';

type ColumnType = "backlog" | "todo" | "doing" | "done";

type CardProps = {
  title: string;
  id: string;
  column: ColumnType;
  handleDragStart: (e: React.DragEvent<Element>, card: { title: string; id: string; column: ColumnType }) => void;
};

const Card = ({ title, id, column, handleDragStart }: CardProps) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        style={{
          cursor: 'grab',
          borderRadius: '0.375rem',
          border: '1px solid #374151',
          color: "black",
          padding: '0.75rem',
          transition: 'background-color 0.2s',
        }}
        onMouseDown={(e) => {
          const target = e.target as HTMLElement;
          target.style.cursor = 'grabbing';
        }}
        onMouseUp={(e) => {
          const target = e.target as HTMLElement;
          target.style.cursor = 'grab';
        }}
      >
        <p style={{ fontSize: '0.875rem', fontWeight: "600" }}>{title}</p>
      </motion.div>
    </>
  );
};

export default Card;
