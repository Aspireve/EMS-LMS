import React, { DragEvent } from "react";
import { motion } from "framer-motion";
import DropIndicator from "./dropindicator";
import { EditOutlined, PlusCircleTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import StackedAvatar from "./stackedavatar";
import StackedCardOnCard from "./stackedavatarcard";
import { getTimeDifference } from "../../../utilities/datedifference";

type ColumnType = "backlog" | "todo" | "doing" | "done";

type CardProps = {
  title: string;
  id: string;
  column: ColumnType;
  handleDragStart: (
    e: React.DragEvent<Element>,
    card: { title: string; id: string; column: ColumnType }
  ) => void;
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
          cursor: "grab",
          borderRadius: "0.375rem",
          color: "black",
          padding: "0.75rem",
          transition: "background-color 0.2s",
          backgroundColor: "white",
          boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.1)",
        }}
        onMouseDown={(e) => {
          const target = e.target as HTMLElement;
          target.style.cursor = "grabbing";
        }}
        onMouseUp={(e) => {
          const target = e.target as HTMLElement;
          target.style.cursor = "grab";
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ fontSize: "1rem", fontWeight: "600" }}>{title}</h2>
            <Button
              type="text"
              icon={<EditOutlined style={{ color: "#aaa" }} />}
            />
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {[
              { name: "Todo", color: "#4679ee", background: "#e9f1fe" },
              { name: "Tomorrow", color: "#de3881", background: "#fdecf5" },
            ].map((tag) => (
              <p
                style={{
                  backgroundColor: tag.background,
                  color: tag.color,
                  fontWeight: "500",
                  padding: "0.2rem 0.5rem",
                  width: "fit-content",
                  borderRadius: "2rem",
                }}
              >
                {tag.name}
              </p>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
                width: "fit-content",
              }}
            >
              <StackedCardOnCard />
              <Button
                type="text"
                shape="circle"
                icon={
                  <PlusCircleTwoTone
                    twoToneColor="#aaa"
                    style={{ fontSize: "2rem" }}
                  />
                }
              />
            </div>
            <p style={{margin: 0, color: "#aaa"}}>{getTimeDifference(new Date(new Date().getTime() - 5500000000))}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
