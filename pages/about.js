import Head from 'next/head'
import Image from 'next/image'

import NameCard from '../components/index/NameCard'
import Appbar from '../components/appBar'

const Home = () => {
  return (
    <>
    <Appbar />
    <section className="py-10 w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
      <Image src="/images/icon.png" width={256} height={256} />
    </section>
    </>
  )
}

export default Home