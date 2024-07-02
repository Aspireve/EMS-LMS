import LatestUpdates from "../../components/tasks/table/latestupdates";
import Leaderboard from "../../components/tasks/table/leaderboard";
import TableDisplay from "../../components/tasks/table/table";
import TaskDistribution from "../../components/tasks/table/taskdistribution";
import TaskRemaining from "../../components/tasks/table/taskremaining";

const Table = () => {
  const DEFAULT_CARDS = [
    // BACKLOG
    { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
    { title: "SOX compliance checklist", id: "2", column: "backlog" },
    { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
    { title: "Document Notifications service", id: "4", column: "backlog" },
    // TODO
    {
      title: "Research DB options for new microservice",
      id: "5",
      column: "todo",
    },
    { title: "Postmortem for outage", id: "6", column: "todo" },
    { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

    // DOING
    {
      title: "Refactor context providers to use Zustand",
      id: "8",
      column: "doing",
    },
    { title: "Add logging to daily CRON", id: "9", column: "doing" },
    // DONE
    {
      title: "Set up DD dashboards for Lambda listener",
      id: "10",
      column: "done",
    },
  ];

  return (
    <div style={{display: "flex", gap: "1.5rem"}}>
      <div style={{width: "70%"}}>
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
