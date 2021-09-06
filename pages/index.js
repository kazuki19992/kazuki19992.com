import Head from 'next/head'
import Link from 'next/link'
import Appbar from '../components/appBar'

import NameCard from '../components/index/NameCard'

const Home = () => {
  return (
    <>
      <Appbar fixed topPage />
      <section className="h-screen w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
        <p className="text-gray-500 text-lg mb-4">＼ CLICK ME! ／</p>
        <Link href="/about">
          <a>
            <NameCard />
          </a>
        </Link>
      </section>
    </>
  )
}

export default Home