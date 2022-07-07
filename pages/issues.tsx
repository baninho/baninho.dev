import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Issues: NextPage = () => {
  return (
  <Layout title="Themen - Florian Imbt" page="issues">
    <div className="container p-24">
      <h1 className="font-serif text-green-1 font-bold text-6xl">Themen</h1>
    </div>
    <div className="container px-24">
      <p className="font-sans text-white text-xl italic">Mehr Informationen bald hier zu den Themen, die mich bewegen: Mobilität, Soziale Gerechtigkeit und gegenseitiger Respekt.</p>
    </div>
  </Layout>  )
}

export default Issues
