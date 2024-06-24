import React from "react";
import { CustomAvatar } from "../customAvatar";

type UserAvatarProps = { name: string; url?: string };

const Useravatar = ({ url, name }: UserAvatarProps) => {
  if (url === undefined) {
    return <CustomAvatar name={name} />;
  }
  return <img src={url} alt={name} style={{
    height: "1.5rem",
    width: "1.5rem",
    borderRadius: "50%",
    objectPosition: "center",
    objectFit: "cover"

  }}/>;
};

export default Useravatar;
