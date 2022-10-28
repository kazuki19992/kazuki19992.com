import React from "react";
import { DefaultLayoutProps } from "../../types/layouts";
import { SideMenu } from "../sideMenu/SideMenu";

export const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <div className="w-screen h-screen flex">
      <SideMenu></SideMenu>
      <div className="flex-grow h-full overflow-y-hidden bg-slate-300 text-slate-800 dark:bg-slate-700 dark:text-slate-200 px-10 py-5">
        {props.children}
      </div>
    </div>
  );
};
