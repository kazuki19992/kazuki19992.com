import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { IsDarkModeContext } from '../pages/_app'

export default function Appbar (props) {

  const isFixed = props.fixed ? 'fixed ' : ''
  const headerClassName = isFixed + 'w-full h-20 flex items-center z-50 kazuki19992Header'

  return (
    <>
    <style>
      {`
        .kazuki19992Header {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}
    </style>
    <header className={headerClassName} style={{backdropFilter: 'blur(12px)'}}>
      <div className="flex items-center container mx-auto">
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
          </div>
        </div>
      </div>
    </header>
    {(!props.topPage && isFixed) ? <div className="h-20"></div> : null}
    </>
  )
}