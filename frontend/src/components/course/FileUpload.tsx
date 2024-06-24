import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import { UploadChangeParam } from "antd/es/upload";
import { UploadFile } from "antd/lib";

const { Dragger } = Upload;

type FileUploadProps = {
  name: string;
  multiple?: boolean;
  onChange: (info: UploadChangeParam<UploadFile<any>>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
};

const customUpload = (file: any) => {
    file.onSuccess(() => ({}));
    return message.success("File Selected")
}

const FileUpload = (props: FileUploadProps) => {
  return (
    <Dragger {...props} customRequest={customUpload}>
    <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
    </Dragger>
  );
};

export default FileUpload;
