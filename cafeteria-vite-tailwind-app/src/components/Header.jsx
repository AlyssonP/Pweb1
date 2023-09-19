const Header = () => {
  return (
    <header>
      <nav className="bg-slate-800 p-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-white font-bold text-xl">Cafeteria Web</h1>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white">Página Inicial</a></li>
              <li><a href="#" className="text-white">Sobre</a></li>
              <li><a href="#" className="text-white">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header