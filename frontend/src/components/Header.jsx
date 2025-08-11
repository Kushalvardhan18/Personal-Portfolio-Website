import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='cursor-pointer'>
            <img src="/src/assets/signature.png" alt="logo" width= "120px" />
        </div>
        <nav className='flex gap-3 font-medium text-1xl '>
           <a className='cursor-pointer hover:!text-[#c778dd]'>Home</a>
           <a className='cursor-pointer hover:!text-[#c778dd]'>About</a>
           <a className='cursor-pointer hover:!text-[#c778dd]'>ContactMe</a>
           <a className='cursor-pointer hover:!text-[#c778dd]'>Hireme</a>
        </nav>
    </div>
  )
}

export default Header