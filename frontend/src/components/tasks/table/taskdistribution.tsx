import {
  CheckCircleFilled,
  ClockCircleFilled,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import React from "react";

const TaskDistribution = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "#fff", borderRadius: "1rem", padding: "1rem 2rem", gap:"2rem", width: "auto", }}>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
        <ExclamationCircleFilled style={{fontSize: "2.5rem", color: "#fd5c63"}}/>
        <h3 style={{fontSize: "1rem", margin: 0}}>Backlog</h3>
        <h2 style={{fontSize: "2rem", margin: 0}}>10</h2>
      </div>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
        <ClockCircleFilled style={{fontSize: "2.5rem", color: "#d4b4fc"}}/>
        <h3 style={{fontSize: "1rem", margin: 0}}>In Progress</h3>
        <h2 style={{fontSize: "2rem", margin: 0}}>10</h2>
      </div>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
        <CheckCircleFilled style={{fontSize: "2.5rem", color: "#41f06f"}} />
        <h3 style={{fontSize: "1rem", margin: 0}}>Completed</h3>
        <h2 style={{fontSize: "2rem", margin: 0}}>10</h2>
      </div>
    </div>
  );
};

export default TaskDistribution;
