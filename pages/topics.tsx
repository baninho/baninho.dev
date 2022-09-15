import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Issues: NextPage = () => {
  return (
  <Layout title="Themen - Florian Imbt" page="issues">
    <div className="container p-24">
      <h1 className="font-bereit text-green-0 text-8xl">Themen</h1>
    </div>
    <div className="container px-24">
      <p className="font-sans text-white text-xl italic">Mehr Informationen bald hier zu den Themen, die mich bewegen: Mobilität, Soziale Gerechtigkeit, Vielfalt und starke Demokratie.</p>
    </div>
  </Layout>  )
}

export default Issues
