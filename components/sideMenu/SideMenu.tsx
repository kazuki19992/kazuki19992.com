import React from "react";
import { ContentGroup } from "./menuItems/ContentsGroup";
import { MenuItem } from "./menuItems/MenuItem";

export const SideMenu = () => {
  return (
    <div className="hidden h-full w-64 bg-slate-800 text-white shadow-lg md:block">
      <div className="border-b border-slate-900 px-4 py-3 shadow transition-all hover:bg-slate-900/30 hover:ease-linear">
        <p className="py-2 font-bold italic">kazuki19992.com</p>
      </div>
      <ContentGroup groupTitle="Library">
        <MenuItem title="Top" />
      </ContentGroup>
    </div>
  );
};
