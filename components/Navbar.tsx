import Link from 'next/link'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import classNames from 'classnames'

export function Navbar({ page }: { page: string }) {
  const NavBarItem = ({ label, link, current }: { label: string, link: string, current: boolean }) => {
    const navbarItemClass = classNames({
      'navbar-item px-8': true,
      'text-white': current,
    })

    return (
      <Link href={link} >
        <a className={navbarItemClass}>{label}</a>
      </Link>
    )
  }

  return (
  <div className="fixed top-0 left-0 w-screen h-20 flex flex-row bg-green-0 font-bereit">
    <NavBarItem label="Home" link="/" current={page==='home'}/>
    <NavBarItem label="Über mich" link="/me" current={page==='me'}/>
    <NavBarItem label="Themen" link="/topics" current={page==='issues'}/>
    <NavBarItem label="Blog" link="/blog" current={page==='blog'}/>
    <NavBarItem label="Termine" link="/calendar" current={page==='calendar'}/>
    <NavBarItem label="Kontakt" link="/connect" current={page==='connect'}/>
    <div className="ml-auto flex flex-row">
      <a className="navbar-item px-4" href="https://github.com/baninho"><BsGithub /></a>
      <a className="navbar-item px-4" href="https://www.instagram.com/baninho109/"><BsInstagram /></a>
      <a className="navbar-item px-4" href="https://twitter.com/baninho3"><BsTwitter /></a>
    </div>
  </div>)
}
