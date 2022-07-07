import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
  <Layout title="Home">
    <div className="container p-24">
      <h1 className="font-serif text-green font-bold text-6xl">Florian Imbt</h1>
      <h2 className="font-sans text-orange-700 font-bold text-5xl italic">Braunschweig</h2>
    </div>
  </Layout>  )
}

export default Home
