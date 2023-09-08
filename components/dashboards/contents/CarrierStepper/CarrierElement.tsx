import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CarrierElementProps } from "../../../../models/Dashboards";

export const CarrierElement = (props: CarrierElementProps) => {
  return (
    <li className="mb-5 ml-6">
      <span
        className={`absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-slate-100 dark:ring-slate-800 ${
          props.isCurrent
            ? "bg-green-200 dark:bg-green-900 dark:ring-gray-900"
            : "bg-slate-200 dark:bg-gray-700 dark:ring-gray-900"
        }`}
      >
        <FontAwesomeIcon
          icon={props.icon}
          className={
            props.isCurrent ? "text-green-500 dark:text-green-400" : ""
          }
        />
      </span>
      <h3 className="font-medium leading-tight">{props.title}</h3>
      <p className="text-xs">{props.subtitle}</p>
    </li>
  );
};
