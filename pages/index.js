import Head from 'next/head'
import Link from 'next/link'
import Appbar from '../components/appBar'

import NameCard from '../components/index/NameCard'

const Home = () => {
  return (
    <>
      <Appbar fixed />
      <section className="h-screen w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
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