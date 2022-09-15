import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Blog: NextPage = () => {
  return (
  <Layout title="Blog - Florian Imbt" page="blog">
    <div className="container p-24">
      <h1 className="font-bereit text-green-0 text-8xl">Blog</h1>
    </div>
    <div className="container px-24">
      <p className="font-sans text-white text-xl italic">Hier werde ich hin und wieder Artikel zu aktuellen Themen, Veranstaltungen und Unfug veröffentlichen.</p>
    </div>
  </Layout>  )
}

export default Blog
