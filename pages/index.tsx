import type { NextPage } from "next";
import { DashboardCardLayout } from "../components/layouts/DashboardCardLayout";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faDiscord,
  faReact,
  faNodeJs,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { SkillCards } from "../components/dashboards/cards/SkillCards";
import { SkillCardsList } from "../types/components/cards";

const Home: NextPage = () => {
  const skillData: SkillCardsList = [
    { icon: faReact, name: "React" },
    { icon: faNodeJs, name: "React" },
    { icon: faJs, name: "React" },
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
        <div className="w-full flex justify-between space-x-2 pt-2">
          <div className="flex-1">
            <div className="flex w-full justify-between space-x-1">
              <DashboardCardLayout title="Contact">
                <div className="flex items-center justify-start space-x-2 pb-1">
                  <FontAwesomeIcon icon={faEnvelope} className="block fa-fw" />
                  <p className="flex-grow">kazuki19992@gmail.com</p>
                </div>
                <div className="flex items-center justify-start space-x-2 pb-1">
                  <FontAwesomeIcon icon={faGithub} className="block fa-fw" />
                  <p className="flex-grow">kazuki19992</p>
                </div>
                <div className="flex items-center justify-start space-x-2 pb-1">
                  <FontAwesomeIcon icon={faTwitter} className="block fa-fw" />
                  <p className="flex-grow">kazuki19992</p>
                </div>
                <div className="flex items-center justify-start space-x-2 pb-1">
                  <FontAwesomeIcon icon={faDiscord} className="block fa-fw" />
                  <p className="flex-grow">カズ之助#0907</p>
                </div>
              </DashboardCardLayout>
            </div>
          </div>
          <div className="flex-1">
            <SkillCards dataList={skillData} />
            <DashboardCardLayout title="News">
              <p>contents</p>
            </DashboardCardLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
