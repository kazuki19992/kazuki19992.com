import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export type ContactsCardDataList = { icon: IconDefinition | any, value: string, genre: string, iconLib?: "fa" | "si" }[]
export type ContactsCardProps = {
  dataList: ContactsCardDataList
}

export type SkillCardsList = { icon: IconDefinition | any, name: string, iconLib: "fa" | "si" }[]
export type SkillCardsProps = {
  dataList: SkillCardsList
}