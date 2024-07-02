import Search from "antd/es/input/Search";
import Board from "../../components/tasks/kanban/board";
import Switchview from "../../components/tasks/kanban/switchview";
import FilterTags from "../../components/tasks/kanban/filtertags";
import AddDocuments from "../../components/tasks/kanban/adddocuments";
import StackedAvatar from "../../components/tasks/kanban/stackedavatar";
import { Button, Tooltip } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";

export const CustomKanban = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ fontWeight: "700", fontSize: "2rem" }}>Tasks Board</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <StackedAvatar />
          <Tooltip title="Share Board">
            <Button
              icon={<ShareAltOutlined />}
              size="large"
              shape="circle"
              iconPosition={"start"}
              style={{ backgroundColor: "transparent", padding: "0 0.5rem" }}
            />
          </Tooltip>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Switchview />
        <div
          style={{
            display: "flex",
            gap: "1rem",
            width: "fit-content",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddDocuments />
          <FilterTags />
          <Search
            placeholder="Search tasks..."
            allowClear
            enterButton="Search"
            size="large"
            style={{ maxWidth: "350px" }}
            onSearch={() => {}}
          />
        </div>
      </div>
      <Board kanbanCards={DEFAULT_CARDS} />
    </div>
  );
};

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
