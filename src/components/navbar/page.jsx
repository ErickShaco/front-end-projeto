import React from 'react'


const Navbar = () => {
  return (
    <div className='fixed w-full z-50 bg-[#B8C3D7]/35 backdrop-blur-lg'>
        <nav className=' text-white'>
            <ul className='flex gap-10 items-center p-4 font-bold'>
                <li className='ml-10'><a href="/">Inicio</a></li>
                <li><a href="/">Animes</a></li>
                <li><a href="/">Filmes</a></li>
                <li className='ml-auto mr-10'><a href="/">Entrar</a></li>
            </ul>

        </nav>
    </div>
  )
}

export default Navbar;

