import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { IsDarkModeContext } from '../pages/_app'

export default function Appbar (props) {

  const {isDarkmode, setIsDarkmode} = useContext(IsDarkModeContext)

  console.log(useContext(IsDarkModeContext))

  const darkModeTrigger = [
    "absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out",
    "absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-purple-600 transform translate-x-full"
  ]

  const toggleDarkmode = () => {
    setIsDarkmode(isDarkmode === 0 ? 1 : 0)

  }

  const isFixed = props.fixed ? 'fixed ' : ''
  const headerClassName = isFixed + 'w-full'

  return (
    <header className={headerClassName}>
      <div className="px-4 py-2 container mx-auto">
        <div className="flex justify-between items-center flex-row">
          <Link href="/">
            <a>
              <div className="flex space-x-2 items-center">
                <Image src="/images/icon.png" width={50} height={50} />
                <p className="text-md">kazuki19992.com</p>
              </div>
            </a>
          </Link>
          <div>
            <label htmlFor="HeaderDarkmodeToggle" className="inline-flex items-center cursor-pointer">
              <span className="mr-3 text-sm">Right</span>
              <span className="relative">
                <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
                <span className={darkModeTrigger[isDarkmode]}>
                  <input id="HeaderDarkmodeToggle" type="checkbox" className="absolute opacity-0 w-0 h-0" onClick={toggleDarkmode}/>
                </span>
              </span>
              <span className="ml-3 text-sm">Dark</span>
            </label>
          </div>
        </div>
      </div>
    </header>
  )
}