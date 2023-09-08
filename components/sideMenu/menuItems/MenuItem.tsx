import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import React from "react";

type MenuItemProps = {
  title: string;
  href?: string;
  icon?: FontawesomeObject;
};
export const MenuItem = (props: MenuItemProps) => {
  return (
    <Link href={props.href || ""}>
      <div className="m-1 flex items-center justify-start space-x-2 rounded px-4 py-1 hover:bg-white/20">
        <p className="">{props.title}</p>
      </div>
    </Link>
  );
};
