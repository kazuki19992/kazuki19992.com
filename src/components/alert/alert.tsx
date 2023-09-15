import React from "react";
import { InfoType } from "../../../types";

export const Alert: React.FC<{
  type: InfoType;
  title?: string;
  message: string | JSX.Element;
}> = ({ type, title, message }) => {
  return (
    <div className="">
      <p>{type}</p>
      <p>{title}</p>
      <p>{message}</p>
    </div>
  );
};
