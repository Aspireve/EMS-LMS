import LatestUpdates from "../../components/tasks/table/latestupdates";
import Leaderboard from "../../components/tasks/table/leaderboard";
import TableDisplay from "../../components/tasks/table/table";
import TaskDistribution from "../../components/tasks/table/taskdistribution";
import TaskRemaining from "../../components/tasks/table/taskremaining";

interface DataType {
  user: string;
  id: string;
  title: string;
  column: "Backlog" | "To Do" | "In Process" | "Done";
  priority: "high" | "medium" | "low";
  updatedAt: Date;
}

const Table = () => {
  const DEFAULT_CARDS: DataType[] = [
    // Backlog
    {
      user: "Steve",
      title: "Look into render bug in dashboard",
      id: "1",
      column: "Backlog",
      priority: "high",
      updatedAt: new Date(),
    },
    {
      user: "Steve",
      title: "SOX compliance checklist",
      id: "2",
      column: "Backlog",
      priority: "high",
      updatedAt: new Date(),
    },
    {
      user: "Steve",
      title: "[SPIKE] Migrate to Azure",
      id: "3",
      column: "Backlog",
      priority: "high",
      updatedAt: new Date(),
    },
    {
      user: "Steve",
      title: "Document Notifications service",
      id: "4",
      column: "Backlog",
      priority: "low",
      updatedAt: new Date(),
    },
    // To Do
    {
      user: "Not Steve",
      title: "Research DB options for new microservice",
      id: "5",
      column: "To Do",
      priority: "low",
      updatedAt: new Date(),
    },
    {
      user: "Steve",
      title: "Postmortem for outage",
      id: "6",
      column: "To Do",
      priority: "medium",
      updatedAt: new Date(),
    },
    {
      user: "Steve",
      title: "Sync with product on Q3 roadmap",
      id: "7",
      column: "To Do",
      priority: "medium",
      updatedAt: new Date(),
    },

    // In Process
    {
      user: "Not Steve",
      title: "Refactor context providers to use Zustand",
      id: "8",
      column: "In Process",
      priority: "medium",
      updatedAt: new Date(),
    },
    {
      user: "Steve",
      title: "Add logging to daily CRON",
      id: "9",
      column: "In Process",
      priority: "medium",
      updatedAt: new Date(),
    },
    // Done
    {
      user: "Not Steve",
      title: "Set up DD dashboards for Lambda listener",
      id: "10",
      column: "Done",
      priority: "medium",
      updatedAt: new Date(),
    },
  ];

  return (
    <div style={{ display: "flex", gap: "1.5rem" }}>
      <div
        style={{
          width: "70%",
          flexDirection: "column",
          display: "flex",
          gap: "1.5rem",
        }}
      >
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <TaskRemaining />
          <TaskDistribution />
          <Leaderboard />
        </div>
        <TableDisplay data={DEFAULT_CARDS} />
      </div>
      <LatestUpdates />
    </div>
  );
};

export default Table;
