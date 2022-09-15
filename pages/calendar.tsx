import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Calendar: NextPage = () => {
  return (
  <Layout title="Termine - Florian Imbt" page="calendar">
    <div className="container p-24">
      <h1 className="font-bereit text-green-0 text-8xl">Termine</h1>
    </div>
    <div className="container px-24">
      <p className="font-sans text-white text-xl italic">Hier wird es einen Kalender mit Events geben, auf denen man mich antrifft.</p>
    </div>
  </Layout>  )
}

export default Calendar
