import Head from 'next/head'

import NameCard from '../components/index/NameCard'

const Home = () => {
  return (
      <section className="h-screen w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
        {/* <h1 className="mb-4 text-indigo-900 text-3xl font-bold">かずのすけくんだよ</h1>
        <p className="">まだ工事中だよ</p> */}
        <NameCard />
      </section>
  )
}

export default Home