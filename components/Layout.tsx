import Head from 'next/head'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout({ user, title, navbar=true, children }
  : { user?: any, title: string, navbar?: boolean, children: any })
  : JSX.Element {
  return (<>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Scoreboard Espresso-Maschine Projekthaus NE" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/gruene.svg" type="image/svg+xml" />
    </Head>
    {navbar && <Navbar/>}
    <div className="container">
      <div className="container mx-auto py-16">
        {children}
      </div>
      <Footer />
    </div>
  </>)
}