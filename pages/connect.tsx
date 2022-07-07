import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Connect: NextPage = () => {
  return (
  <Layout title="Kontakt - Florian Imbt" page="connect">
    <div className="container p-24">
      <h1 className="font-serif text-green-1 font-bold text-6xl">Kontakt</h1>
    </div>
    <div className="container px-24">
      <p className="font-sans text-white text-xl italic">Ihr erreicht mich über die Social Media Accounts in der Navigation oder per E-Mail an <a href="mailot:florianimbt@gmail.com" className="underline" >florianimbt@gmail.com</a></p>
    </div>
  </Layout>  )
}

export default Connect
