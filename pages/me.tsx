import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Me: NextPage = () => {
  return (
  <Layout title="Über mich - Florian Imbt" page="me">
    <div className="container p-24">
      <h1 className="font-serif text-green-1 font-bold text-6xl">Über mich</h1>
    </div>
    <div className="container px-24">
      <p className="font-sans text-white text-xl italic">Hier gibt es bald ein Essay über mich und die üblichen Eckdaten.</p>
    </div>
  </Layout>  )
}

export default Me
