import React from 'react'


const Navbar = () => {
  return (
    <div className='w-full z-50 fixed bg-[#B8C3D7]/35 backdrop-blur-lg shadow-lg shadow-black/20'>
        <nav className=' text-white'>
            <ul className='flex gap-10 items-center p-4 font-bold'>
                <p>氷 Animes</p>
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Animes</a></li>
                <li><a href="/">Filmes</a></li>
                <li className='ml-auto mr-10'><a href="/">Entrar</a></li>
            </ul>

        </nav>
    </div>
  )
}

export default Navbar;

