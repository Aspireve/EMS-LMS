import React from 'react'

const TaskRemaining = () => {
  return (
    <div style={{backgroundColor: "#e6f4ff", width: "fit-content", padding: "1rem", borderRadius: "1rem", border: "1px solid", borderColor: "#1677ff"}}>
        <div>
            <h2 style={{margin: 0}}>Tasks Remaining</h2>
            <h1 style={{margin: 0, fontSize: "2.5rem", fontWeight: "700"}}>10</h1>
        </div>
        <button style={{backgroundColor: "#1677ff", border: "none", color: "#fff", padding: "0.5rem 1rem", borderRadius: "0.5rem"}}>
            View Kanban Board
        </button>
    </div>
  )
}

export default TaskRemaining