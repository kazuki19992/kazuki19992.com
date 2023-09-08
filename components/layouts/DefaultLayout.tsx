import React from "react";
import { DefaultLayoutProps } from "../../types/layouts";
import { SideMenu } from "../sideMenu/SideMenu";

export const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <div className="flex h-screen w-screen items-start">
      <SideMenu></SideMenu>
      <div className="h-full grow overflow-y-auto bg-slate-300 px-10 py-5 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
        {props.children}
      </div>
    </div>
  );
};
