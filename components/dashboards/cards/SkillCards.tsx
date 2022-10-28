import React from "react";
import { DashboardCardLayout } from "../../layouts/DashboardCardLayout";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkillCardsType } from "../../../types/components/cards";

export const SkillCards = (props: SkillCardsType) => {
  return (
    <DashboardCardLayout title="Skills">
      <div className="flex justify-between items-center space-x-2 pb-2">
        {props.dataList.map((data, index) => (
          <div className="flex items-center justify-center w-10 h-10 rounded border">
            <FontAwesomeIcon
              icon={data.icon}
              className="block fa-fw text-2xl"
            />
          </div>
        ))}
      </div>
    </DashboardCardLayout>
  );
};
