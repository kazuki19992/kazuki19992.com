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
import { CarrierStepper } from "../components/dashboards/contents/CarrierStepper";

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
      value: "kazuki19992",
      genre: "Zenn",
      iconLib: "si",
    },
  ];
  const skillData: SkillCardsList = [
    { icon: faBrands.faReact, name: "React", iconLib: "fa" },
    { icon: simpleIcons.Nextdotjs, name: "Next.js", iconLib: "si" },
    { icon: faBrands.faNodeJs, name: "NodeJS", iconLib: "fa" },
    { icon: simpleIcons.Typescript, name: "Typescript", iconLib: "si" },
    { icon: simpleIcons.Electron, name: "electron", iconLib: "si" },
    { icon: faBrands.faPhp, name: "PHP", iconLib: "fa" },
    { icon: faBrands.faJava, name: "Java", iconLib: "fa" },
  ];
  return (
    <div className="flex w-full items-center justify-center lg:h-full">
      <div className="w-full">
        <div className="flex w-full items-center justify-center space-x-3 px-8 pb-3">
          <img
            src="/icon.jpg"
            alt="icon"
            className="block h-32 w-32 rounded-full shadow"
          />
          <div className="w-72">
            <p className="mb-2 border-b border-slate-700 pb-2 text-4xl dark:border-slate-300">
              カズ之助
            </p>
            <p className="italic">@kazuki19992</p>
            <p className="italic">kazuki19992@gmail.com</p>
          </div>
        </div>

        {/* Dashboard */}
        <div className="mt-4">
          <p className="text-2xl font-bold">Profile</p>
          <div className="flex w-full flex-col items-stretch justify-between gap-2 pt-2 lg:flex-row">
            <div className="flex-1 space-y-2">
              <ContactsCard dataList={contactData} />
              <SkillsCard dataList={skillData} />
            </div>
            <div className="min-w-fit flex-1 space-y-2">
              <DashboardCardLayout title="Carrier" className="h-full p-3">
                <CarrierStepper />
              </DashboardCardLayout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
