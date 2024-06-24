import { useOne } from "@refinedev/core";
import { useParams } from "react-router-dom";
import {
  AppstoreOutlined,
  FileSyncOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import TitleForm from "../../components/course/TitleForm";
import { useEffect, useState } from "react";
import DescriptionForm from "../../components/course/DescriptionForm";
import CourseImageForm from "../../components/course/CourseImage";
import CategoryForm from "../../components/course/CategoryForm";
import AttachmentsForm from "../../components/course/AttachmentsForm";

const CourseSetUp = () => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  const { data, isLoading, isError } = useOne({
    resource: "v1/course/getCourse",
    id,
  });

  console.log("rerender");

  return (
    <div>
      <div>
        <h1>Course Setup</h1>
        <p>Complete all fields (5/5)</p>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "2rem",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <AppstoreOutlined
              style={{
                backgroundColor: "#d0f0fe",
                color: "#000080",
                fontSize: "1.5rem",
                padding: "0.5rem",
                borderRadius: "50%",
              }}
            />
            <h2>Customize your course</h2>
          </div>
          <TitleForm
            data={data?.title}
            id={id}
            isLoading={isLoading}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
          <DescriptionForm
            data={data?.description}
            id={id}
            isLoading={isLoading}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
          <CourseImageForm
            data={data?.image}
            id={id}
            isLoading={isLoading}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
          <CategoryForm
            data={data?.category}
            id={id}
            isLoading={isLoading}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </div>
        <div
          style={{
            width: "50%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <UnorderedListOutlined
              style={{
                backgroundColor: "#d0f0fe",
                color: "#000080",
                fontSize: "1rem",
                padding: "0.75rem",
                borderRadius: "50%",
              }}
            />
            <h2>Course Chapters</h2>
          </div>
          <p>TODO</p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <UserAddOutlined
              style={{
                backgroundColor: "#d0f0fe",
                color: "#000080",
                fontSize: "1.5rem",
                padding: "0.5rem",
                borderRadius: "50%",
              }}
            />
            <h2>Assign Course</h2>
          </div>
          <p>TODO</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <FileSyncOutlined
              style={{
                backgroundColor: "#d0f0fe",
                color: "#000080",
                fontSize: "1.5rem",
                padding: "0.5rem",
                borderRadius: "50%",
              }}
            />
            <h2 style={{margin: 0}}>Course Attachments</h2>
          </div>
          <AttachmentsForm
            data={data?.attachments}
            id={id}
            isLoading={isLoading}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseSetUp;
