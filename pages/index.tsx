import type { NextPage } from "next";
import { DashboardCardLayout } from "../components/layouts/DashboardCardLayout";
import * as fa from "@fortawesome/free-solid-svg-icons";
import * as faBrands from "@fortawesome/free-brands-svg-icons";
import { SkillsCard } from "../components/dashboards/cards/SkillsCard";
import {
  ContactsCardDataList,
  SkillCardsList,
} from "../types/components/cards";
import * as simpleIcons from "@icons-pack/react-simple-icons";
import { ContactsCard } from "../components/dashboards/cards/ContactsCard";

const Home: NextPage = () => {
  const contactData: ContactsCardDataList = [
    { icon: fa.faEnvelope, value: "kazuki19992@gmail.com", genre: "email" },
    { icon: faBrands.faTwitter, value: "@kazuki19992", genre: "Twitter" },
    { icon: faBrands.faGithub, value: "kazuki19992", genre: "GitHub" },
    {
      icon: faBrands.faSpeakerDeck,
      value: "kazuki19992",
      genre: "SpeakerDeck",
    },
    { icon: faBrands.faDiscord, value: "カズ之助#0907", genre: "Discord" },
    {
      icon: simpleIcons.Zenn,
      value: "カズ之助#0907",
      genre: "Discord",
      iconLib: "si",
    },
  ];
  const skillData: SkillCardsList = [
    { icon: faBrands.faReact, name: "React", iconLib: "fa" },
    { icon: faBrands.faNodeJs, name: "NodeJS", iconLib: "fa" },
    { icon: simpleIcons.Typescript, name: "Typescript", iconLib: "si" },
    { icon: simpleIcons.Electron, name: "electron", iconLib: "si" },
    { icon: faBrands.faPhp, name: "PHP", iconLib: "fa" },
    { icon: faBrands.faJava, name: "Java", iconLib: "fa" },
    { icon: fa.faVial, name: "Test", iconLib: "fa" },
  ];
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-full">
        <div className="flex px-8 justify-center items-center space-x-3 pb-3 w-full">
          <img
            src="/icon.jpg"
            alt="icon"
            className="w-32 h-32 rounded-full block shadow"
          />
          <div className="w-72">
            <p className="text-4xl pb-2 border-b mb-2 dark:border-slate-300 border-slate-700">
              カズ之助
            </p>
            <p className="italic">@kazuki19992</p>
            <p className="italic">kazuki19992@gmail.com</p>
          </div>
        </div>

        {/* Dashboard */}
        <div className="mt-4">
          <p className="text-2xl font-bold">Profile</p>
          <div className="w-full flex justify-between space-x-2 pt-2 items-stretch">
            <div className="flex-1 space-y-2">
              <ContactsCard dataList={contactData} />
              <SkillsCard dataList={skillData} />
            </div>
            <div className="flex-1 space-y-2">
              <DashboardCardLayout title="News" className="h-full">
                <p>contents</p>
              </DashboardCardLayout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
