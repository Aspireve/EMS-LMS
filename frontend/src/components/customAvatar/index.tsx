import { Avatar } from "antd";
import React, { memo } from "react";
import { getRandomColorFromString, getNameInitials } from "../../utilities";

export const CustomAvatarComponent = ({ name = "", style, ...rest }) => {
  return (
    <Avatar
      alt={name}
      size="size"
      style={{
        backgroundColor: rest?.src
          ? "transparent"
          : getRandomColorFromString(name),
        display: "flex",
        alignItems: "center",
        border: "none",
        ...style,
      }}
      {...rest}
    >
      {getNameInitials(name)}
    </Avatar>
  );
};

export const CustomAvatar = memo(
    CustomAvatarComponent,
    (prevProps, nextProps) => {
        return prevProps.name === nextProps.name && prevProps.src === nextProps.src;
    }
)
