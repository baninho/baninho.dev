import Link from 'next/link'
import styles from '../styles/Home.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤️ in Braunschweig<br />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Link href="/privacy"><a>Datenschutzerklärung</a></Link> 
        <Link href="/imprint"><a>Impressum</a></Link>
      </div>
    </footer>)
}
