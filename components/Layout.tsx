import Head from 'next/head'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import styles from '../styles/Home.module.css'


export function Layout({ user, title, navbar=true, children }
  : { user?: any, title: string, navbar?: boolean, children: any })
  : JSX.Element {
  return (<>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Scoreboard Espresso-Maschine Projekthaus NE" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {navbar && <Navbar user={user} />}
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  </>)
}