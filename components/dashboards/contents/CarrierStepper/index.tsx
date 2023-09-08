import { CarrierElement } from "./CarrierElement";
import * as fa from "@fortawesome/free-solid-svg-icons";

export const CarrierStepper = () => {
  return (
    <div className="p-3">
      <ol className="relative border-l border-slate-400 text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <CarrierElement
          title="誕生"
          icon={fa.faBabyCarriage}
          subtitle="1999-04-06"
        />
        <CarrierElement
          title="基本情報技術者試験 合格"
          icon={fa.faIdCard}
          subtitle="2016-11-07"
        />
        <CarrierElement
          title="私立日本大学 工学部 入学"
          icon={fa.faSchool}
          subtitle="2018-04-01"
        />
        <CarrierElement
          title="株式会社エフコム"
          icon={fa.faLaptopCode}
          subtitle="2018-06-01 → 2022-03-31 ITヘルプデスク/ソフトウェアエンジニア"
        />
        <CarrierElement
          title="応用情報技術者試験 合格"
          icon={fa.faIdCard}
          subtitle="2019-05-22"
        />
        <CarrierElement
          title="株式会社ウェブレッジ"
          icon={fa.faLaptopCode}
          subtitle="2019-08-15 → 2020-08-31 QA業務"
        />
        <CarrierElement
          title="日大工学部 情報研究会 代表"
          icon={fa.faUsers}
          subtitle="2020-10-01"
        />
        <CarrierElement
          title="#StdOut2021 開催"
          icon={fa.faMicrophoneLines}
          subtitle="2020-12-14"
        />
        <CarrierElement
          title="株式会社Tech Flyer"
          icon={fa.faLaptopCode}
          subtitle="2021-11-01 → 2022-03-31 Webフロントエンドエンジニア 業務委託"
        />
        <CarrierElement
          title="PiyogrammerConference 2021 開催"
          icon={fa.faMicrophoneLines}
          subtitle="2021-12-02"
        />
        <CarrierElement
          title="ウイングアーク1st株式会社"
          icon={fa.faLaptopCode}
          subtitle="2022-04-01 Webフロントエンドエンジニア"
          isCurrent
        />
      </ol>
    </div>
  );
};
