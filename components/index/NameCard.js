import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBuilding, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

import datas from '../../data/datas'

export default function NameCard (props) {
  return (
    <div className="flex p-8 rounded-md shadow-md space-x-5 justify-center items-center bg-green-50 ripple-bg-green-50">
      <Image src="/images/icon.png" width={200} height={200} />
      <div className="flex flex-col space-y-4">
        <div>
          <p className="text-2xl font-bold">カズ之助</p>
          <p className="text-sm text-gray-500">人です</p>
        </div>

        <div className="">
          <div className="flex space-x-2 items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>{datas.mail}</p>
          </div>
          <div className="flex space-x-2 items-center">
            <FontAwesomeIcon icon={faTwitter} />
            <p>@{datas.twitter}</p>
          </div>
          <div className="flex space-x-2 items-center">
            <FontAwesomeIcon icon={faGithub} />
            <p>{datas.github}</p>
          </div>
          <div className="flex space-x-2 items-center">
            <FontAwesomeIcon icon={faBuilding} />
            <p>{datas.company}</p>
          </div>
          {/* <div className="flex space-x-2 items-center">
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            <p>{datas.place}</p>
          </div> */}
        </div>

      </div>
    </div>
  )
}