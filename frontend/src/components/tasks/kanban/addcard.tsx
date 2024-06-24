import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Dispatch,
    SetStateAction,
  } from "react";
import { PlusOutlined } from '@ant-design/icons';

type ColumnType = "backlog" | "todo" | "doing" | "done";

type CardType = {
    title: string;
    id: string;
    column: ColumnType;
  };

type AddCardProps = {
    column: ColumnType;
    setCards: Dispatch<SetStateAction<CardType[]>>;
  };

  
const AddCard = ({ column, setCards }: AddCardProps) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim().length) return;
    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit} style={{ width: '100%' }}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            style={{
              width: '100%',
              borderRadius: '0.375rem',
              border: '1px solid #7C3AED',
              backgroundColor: 'transparent',
              padding: '0.75rem',
              fontSize: '0.875rem',
              outline: 'none'
            }}
          />
          <div style={{ marginTop: '0.375rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.375rem' }}>
            <button
              onClick={() => setAdding(false)}
              style={{
                padding: '0.375rem 0.75rem',
                fontSize: '0.75rem',
                color: 'white',
                transition: 'color 0.2s',
                cursor: 'pointer',
                backgroundColor:"#AA0000",
                border: "none",
                borderRadius: "0.375rem"
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.color = '#FAFAFA';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.color = '#9CA3AF';
              }}
            >
              Close
            </button>
            <button
              type="submit"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                borderRadius: '0.375rem',
                backgroundColor: '#13274F',
                color: "white",
                padding: '0.375rem 0.75rem',
                fontSize: '0.75rem',
                transition: 'background-color 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.color = '#D1D5DB';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.color = '#FAFAFA';
              }}
            >
              <span>Add</span>
              <PlusOutlined />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            gap: '0.375rem',
            padding: '0.375rem 0.75rem',
            fontSize: '0.75rem',
            color: '#000',
            fontWeight: "700",
            transition: 'background-color 0.2s',
            cursor: 'pointer',
            borderRadius: '0.375rem',
            border: "2px solid",
            borderColor: "#007FFF",
            boxShadow: "0 2px 2px #00000022"
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = '#007FFF';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = 'transparent';
          }}
        >
          <span>Add card</span>
          <PlusOutlined />
        </motion.button>
      )}
    </>
  );
};

export default AddCard;
