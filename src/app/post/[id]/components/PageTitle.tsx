import { PostDateAlert } from "./"
import {format} from "date-fns"

export const PageTitle: React.FC<{
  title: string,
  lastUpdate: Date

}> = ({title, lastUpdate}) => {
  return (
    <div className="sticky top-0 w-full p-3 shadow dark:shadow-gray-500">
      <div className="container mx-auto">

        <h1 className="my-2 text-2xl font-bold">{title}</h1>
        <p className="mb-2 text-xs text-gray-900/50 dark:text-gray-100/50">Last update: {format(lastUpdate, "yyyy/MM/dd HH:mm:ss")}</p>

        <PostDateAlert />
      </div>
    </div>
    )
}