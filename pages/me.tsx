import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Me: NextPage = () => {
  return (
  <Layout title="Über mich - Florian Imbt" page="me">
    <div className="container p-24">
      <h1 className="font-serif text-green-2 font-bold text-6xl">Florian Imbt</h1>
      <h2 className="font-sans text-orange-700 font-bold text-5xl italic">Braunschweig</h2>
    </div>
    <div className="container px-24">
      <p className="font-sans text-green-1 text-xl italic">Hier entsteht gerade meine Website. Komm bald wieder!</p>
    </div>
  </Layout>  )
}

export default Me
