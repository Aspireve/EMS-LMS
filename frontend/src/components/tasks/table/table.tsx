import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

interface DataType {
  id: string;
  title: string;
  column: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Sr. No.",
    dataIndex: "id",
    showSorterTooltip: { target: "full-header" },
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.id.indexOf(value as string) === 0,
    sorter: (a, b) => parseInt(a.id) - parseInt(b.id),
    sortDirections: ["descend"],
  },
  {
    title: "Title",
    dataIndex: "title",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Current State",
    dataIndex: "column",
    render: (text) => (
      <div
        style={{
          padding: "0.25rem 1rem",
          borderRadius: "0.5rem",
          backgroundColor: "#fd5c6355",
          color: "#7C0A02",
          width: "fit-content",
          borderColor: "#7C0A02",
          border: "1px solid",
        }}
      >
        {text}
      </div>
    ),
    filters: [
      {
        text: "Back Log",
        value: "backlog",
      },
      {
        text: "ToDo",
        value: "todo",
      },
      {
        text: "Doing",
        value: "doing",
      },
      {
        text: "Done",
        value: "done",
      },
    ],
    fixed: "right",
    onFilter: (value, record) => record.column.indexOf(value as string) === 0,
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const TableDisplay = ({ data }: { data: DataType[] }) => (
  <>
      <h1 style={{fontWeight: "700", fontSize: "2rem"}}>Tasks Table</h1>
    <Table
      bordered
      columns={columns}
      dataSource={data}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  </>
);

export default TableDisplay;
