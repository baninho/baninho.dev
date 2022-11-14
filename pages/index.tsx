import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
  <Layout title="Florian Imbt" page="home">
    <div className="container p-24">
      <h1 className="font-bereit text-green-0 text-8xl">Florian Imbt</h1>
      <h2 className="font-bereit text-white text-6xl">Braunschweig</h2>
    </div>
    <div className="container px-24">
      <p className="font-sans text-white text-xl">Hier entsteht gerade meine Website. Komm bald wieder!</p>
    </div>
  </Layout>  )
}

export default Home
