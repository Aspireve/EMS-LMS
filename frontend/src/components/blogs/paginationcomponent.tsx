import { Pagination } from "antd";
import { PaginationProps } from "antd/lib";
import React from "react";

type PaginationComponentProps = {
    isLoading: boolean;
    total: number;
    current: number;
    setCurrent: (current: number) => void;
}

const PaginationComponent = ({ isLoading = false, total, current, setCurrent }: PaginationComponentProps) => {
    const changepage = (page: number, pageSize: number) => {
        setCurrent(page)
    }

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };
 
  return (!isLoading && <Pagination current={current} total={isLoading ? 0 : total} pageSize={12} itemRender={itemRender} style={{margin: "2rem auto", width: "fit-content"}} onChange={changepage}/>)
};

export default PaginationComponent;
