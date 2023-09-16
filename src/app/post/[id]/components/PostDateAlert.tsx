import { Alert } from "@/components";
import { InfoType } from "@/types";

export const PostDateAlert = () => (
  <>
  <Alert
    type={InfoType.WARN}
    title="この記事の最終更新は半年前です！"
    message={"最新の情報と異なるかもです。注意して読んでね！"}
    />
  <Alert
    type={InfoType.ERROR}
    title="この記事の最終更新は半年前です！"
    message={"最新の情報と異なるかもです。注意して読んでね！"}
    />
  <Alert
    type={InfoType.SUCCESS}
    title="この記事の最終更新は半年前です！"
    message={"最新の情報と異なるかもです。注意して読んでね！"}
    />
  <Alert
    type={InfoType.INFO}
    title="この記事の最終更新は半年前です！"
    message={"最新の情報と異なるかもです。注意して読んでね！"}
    />
    </>
)