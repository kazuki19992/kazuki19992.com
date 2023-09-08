import React from "react";
import { ContentGroupProps } from "../../../types/layouts";

export const ContentGroup = (props: ContentGroupProps) => {
  return (
    <div className="my-1">
      <div className="flex w-full items-center justify-between space-x-2 px-2">
        <p className="text-xs font-bold text-slate-500">{props.groupTitle}</p>
        <hr className="grow border-t border-slate-500" />
      </div>
      {props.children}
    </div>
  );
};
