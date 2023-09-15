import { Alert } from "@/components";
import { InfoType } from "../../../../types";

const Page = () => {
  return (
    <div className="container p-3">
      <h1 className="text-2xl font-bold">ここに記事タイトル</h1>
      <p className="text-xs text-gray-900/50">Last update: 2022/12/31 10:56</p>
      <Alert
        type={InfoType.WARN}
        message={"この記事の最終更新は半年前です。"}
      />
    </div>
  );
};

export default Page;
