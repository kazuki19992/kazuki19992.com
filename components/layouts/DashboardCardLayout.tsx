import React from "react";
import { DashboardCardLayoutProps } from "../../types/layouts";

export const DashboardCardLayout = (props: DashboardCardLayoutProps) => {
  return (
    <div
      className={
        "w-full rounded-lg bg-slate-100 px-5 py-2 shadow shadow-slate-500/40 dark:bg-slate-800 dark:shadow-slate-900/40 " +
        props.className
      }
    >
      <div className="flex w-full items-center space-x-2">
        <p className="text-lg font-bold">{props.title}</p>
        <hr className="grow border-slate-300 dark:border-slate-700" />
      </div>
      {props.children}
    </div>
  );
};
