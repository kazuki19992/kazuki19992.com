import React from "react";
import { DashboardCardLayout } from "../../layouts/DashboardCardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactsCardProps } from "../../../types/components/cards";

export const ContactsCard = (props: ContactsCardProps) => {
  return (
    <DashboardCardLayout title="Contacts">
      {props.dataList.map((data, index) => {
        const Si = data.icon;
        return (
          <div
            className="flex items-center justify-start space-x-2 pb-1"
            key={index}
          >
            <div className="w-5 flex justify-center items-center">
              {data.iconLib !== "si" ? (
                <FontAwesomeIcon icon={data.icon} className="block fa-fw" />
              ) : (
                <Si className="block w-4" />
              )}
            </div>
            <p className="flex-grow">{data.value}</p>
          </div>
        );
      })}
    </DashboardCardLayout>
  );
};
