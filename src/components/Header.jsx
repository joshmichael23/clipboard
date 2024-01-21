import React from 'react'

const Header = () => {
  return (
    
    <>
        <header className='bg-hero-mobile lg:bg-hero-desktop bg-cover bg-no-repeat bg-center grid place-items-center py-32 px-8 gap-y-8'>
            <img className="lg:w-32" src="/logo.svg" alt="Clipboard logo" />
            <h1 className='text-3xl font-bold text-center text-cl-DarkGrayishBlue lg:text-4xl'>A history of everything you copy</h1>
            <p className='text-center text-cl-DarkGrayishBlue text-base'>Clipboard allows you to track and <span className="block lg:inline-block">organize everything you copy. Instantly</span> <span className='block'>access your clipboard on all your devices.</span> </p>
            <div className='grid justify-items-center gap-4 lg:grid-cols-2'>
              <button className='rounded-full w-[300px] bg-cl-StrongCyan hover:bg-cl-StrongCyan2  transition duration-200 text-white font-semibold p-4 text-lg lg:w-[220px] lg:p-2'>Download for iOS</button>
              <button className='rounded-full w-[300px] bg-cl-LightBlue hover:bg-cl-LightBlue2 text-white font-semibold p-4 text-lg lg:w-[220px] transition duration-200'> Download for Mac</button>
            </div>
        </header>
    </>
  )
}

export default Header