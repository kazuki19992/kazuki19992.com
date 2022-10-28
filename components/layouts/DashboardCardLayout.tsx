import React from "react";
import { DashboardCardLayoutProps } from "../../types/layouts";

export const DashboardCardLayout = (props: DashboardCardLayoutProps) => {
  return (
    <div className="w-full my-2 px-5 py-2 rounded-lg shadow bg-slate-100 shadow-slate-500/40 dark:bg-slate-800 dark:shadow-slate-900/40">
      <div className="w-full flex space-x-2 items-center">
        <p className="text-lg font-bold">{props.title}</p>
        <hr className="flex-grow border-slate-300 dark:border-slate-700" />
      </div>
      {props.children}
    </div>
  );
};
