import { Button, Dropdown, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { CustomAvatar } from "../../customAvatar";
import { MenuProps } from "antd/lib";
import LeaderColumn from "./leadercolumn";
import { useEffect, useState } from "react";
import StateClip from "./stateclip";
import StatusClip from "./statusclip";

interface DataType {
  user: string;
  id: string;
  title: string;
  column: "Backlog" | "To Do" | "In Process" | "Done";
  priority: "high" | "medium" | "low";
  updatedAt: Date;
}

const TableDisplay = ({ data }: { data: DataType[] }) => {
  const [filterNames, setFilterNames] = useState<string[]>([]);
  const [filterTitles, setFilterTitles] = useState<string[]>([]);

  useEffect(() => {
    const names = data.map((item) => item.user);
    setFilterNames([...new Set(names)]);
    const titles = data.map((item) => item.title);
    setFilterTitles([...new Set(titles)]);
  }, []);

  const columns: TableColumnsType<DataType> = [
    {
      title: "User",
      dataIndex: "user",
      defaultSortOrder: "descend",
      filters: filterNames.map((name) => ({ text: name, value: name })),
      filterSearch: true,
      onFilter: (value, record) => record.user.startsWith(value as string),
      render: (text) => <LeaderColumn name={text} />,
      width: "fit-content",
    },
    {
      title: "Title",
      dataIndex: "title",
      defaultSortOrder: "descend",
      filters: filterTitles.map((title) => ({ text: title, value: title })),
      filterSearch: true,
      onFilter: (value, record) => record.title.startsWith(value as string),
    },
    {
      title: "Current State",
      dataIndex: "column",
      filters: [
        { text: "Backlog", value: "Backlog" },
        { text: "To Do", value: "To Do" },
        { text: "In Process", value: "In Process" },
        { text: "Done", value: "Done" },
      ],
      fixed: "right",
      render: (text) => <StatusClip text={text} />,
      onFilter: (value, record) => record.column.indexOf(value as string) === 0,
    },
    {
      title: "Priority",
      dataIndex: "priority",
      filters: [
        { text: "high", value: "high" },
        { text: "medium", value: "medium" },
        { text: "low", value: "low" },
      ],
      onFilter: (value, record) => record.priority.startsWith(value as string),
      render: (text) => <StateClip text={text} />,
    },
    {
      title: "Last Updated",
      dataIndex: "updatedAt",
      render: (text) => text.toDateString(),
      sorter: (a, b) => a.title.length - b.title.length,
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

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
      scroll={{ y: 400 }}
      pagination={false}
      style={{borderRadius: "1.5rem", boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)"}}
    />
  );
};

export default TableDisplay;
