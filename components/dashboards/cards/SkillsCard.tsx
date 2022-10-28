import React from "react";
import { DashboardCardLayout } from "../../layouts/DashboardCardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkillCardsProps } from "../../../types/components/cards";

export const SkillsCard = (props: SkillCardsProps) => {
  return (
    <DashboardCardLayout title="Skills">
      <div className="flex justify-between items-center space-x-2 pb-2">
        {props.dataList.map((data, index) => {
          const Si = data.icon;
          return (
            <div
              className="flex items-center justify-center w-10 h-10 rounded border border-slate-700 dark:border-slate-300"
              key={index}
            >
              {data.iconLib === "fa" ? (
                <FontAwesomeIcon
                  icon={data.icon}
                  className="block fa-fw text-2xl"
                />
              ) : (
                <Si className="block text-2xl" />
              )}
            </div>
          );
        })}
      </div>
    </DashboardCardLayout>
  );
};
