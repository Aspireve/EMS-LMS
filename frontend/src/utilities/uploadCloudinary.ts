import { message } from "antd";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dut0muwrt/raw/upload";

export const uploadFileToCloudinary = async (file: any) => {
  const cloudFileUpload = new FormData();
  cloudFileUpload.append("file", file.originFileObj);
  cloudFileUpload.append("upload_preset", "ml_default");
  try {
    const response = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: cloudFileUpload,
    });
    const data = await response.json();
    return data.url;
  } catch (error) {
    return message.error(`File uploaded error`);
  }
};
