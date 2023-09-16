import React from "react";
import { InfoType } from "../../types";
import { useAlert } from "./hooks";

export const Alert: React.FC<{
  type: InfoType;
  title?: string;
  message: string | JSX.Element;
}> = ({ type, title, message }) => {
  const {getColor, getIcon} = useAlert();
  const { background: backgroundColor, text: textColor } = getColor(type);
  const Icon = getIcon(type);

  return (
    <div className={`w-full rounded px-3 py-1 ${backgroundColor} ${textColor}`}>
      <div className="flex items-center gap-2">
        <Icon />
        <p className="font-bold">{title}</p>
      </div>
      <p className="text-sm">{message}</p>
    </div>
  );
};
