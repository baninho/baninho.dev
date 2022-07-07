export function Navbar() {
  return (
  <div className="fixed top-0 left-0 w-screen h-16 flex flex-row bg-black text-green shadow font-serif">
    <NavBarItem label="Home"/>
    <NavBarItem label="Über mich" />
    <NavBarItem label="Themen" />
    <NavBarItem label="Blog" />
    <NavBarItem label="Termine" />
    <NavBarItem label="Kontakt" />
  </div>)
}

const NavBarItem = ({ label }: {label: string}) => {
  return (
  <a href="/" className="relative flex items-center justify-center px-8 
  hover:text-white hover:bg-gray-900 text-2xl font-bold italic">
    {label}
  </a>
  )
}