import { Radio } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Switchview = () => {
    const navigate = useNavigate()
  return (
    <Radio.Group size="large" value={"large"} onChange={() => navigate("/tasks/table")}>
      <Radio.Button value="large" >Board View</Radio.Button>
      <Radio.Button value="default">List View</Radio.Button>
    </Radio.Group>
  );
};

export default Switchview;
