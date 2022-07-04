import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'

export function Navbar({ user }: { user?: any}) {
  const navbar = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const dropDown = () => {
    if (!navbar.current) return
    navbar.current.className = navbar.current.className.includes('opened') ? 
      navbar.current.className.replace('opened', 'closed') :
      navbar.current.className.replace('closed', 'opened')
  }

  const home = () => { router.push('/') }
  const checkout = () => { router.push('/pay') }
  const profile = () => { router.push('/profile') }
  const logout = () => { router.push('/api/auth/logout') }
  const admin = () => { router.push('/admin') }


  return (<>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div ref={navbar} id="navbar" className="closed">
      <div className="nav-item left" onClick={home}><Link href="/">Home</Link></div>
        {user && user.balance !== undefined && <>
          <div className="nav-item left" onClick={checkout}><Link href="/pay">Bezahlen</Link></div>
          {user.admin && <div className="nav-item left" onClick={admin}><Link href="/admin">Admin</Link></div>}
          <div className="icon nav-item" onClick={dropDown}>
            <i className="fa fa-bars"></i>
          </div>
          <div className="nav-item right" onClick={logout}><Link href="/api/auth/logout">Logout</Link></div>
          <div className="nav-item right" onClick={profile}><Link href="/profile">Profil</Link></div>
          <div className="text-item right">Kontostand: {user.balance.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</div>
          <div className="text-item right desktop">Angemeldet als <Link href="/profile"><a>{user.name}</a></Link></div>
        </>
        }
      </div>
  </>)
}
  