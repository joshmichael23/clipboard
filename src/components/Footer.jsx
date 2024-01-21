import React from 'react'

const Footer = () => {
  return (
    <footer className='grid gap-8 justify-items-center text-center py-8 lg:px-[165px] lg:gap-[128px] bg-slate-100 lg:grid-cols-[auto_1fr_auto] lg:justify-items-start'>
        <img className="w-[60px]" src="/logo.svg" alt="Clipboard logo" />
        <nav className='grid lg:grid-cols-3 gap-8 lg:gap-x-[90px] lg:gap-y-7'>
          <a className="hover:text-cl-StrongCyan transition duration-200" href="">FAQs</a>
          <a className="hover:text-cl-StrongCyan transition duration-200" href="">Contact Us</a>
          <a className="hover:text-cl-StrongCyan transition duration-200" href="">Privacy Policy</a>
          <a className="hover:text-cl-StrongCyan transition duration-200" href="">Press Kit</a>
          <a className="hover:text-cl-StrongCyan transition duration-200" href="">Install Guide</a>
        </nav>
        <nav className='flex flex-row gap-8 self-center'>
          <a href="#"><img alt="Logo for Facebook" src="/icon-facebook.svg" /></a>
          <a href="#"><img alt="Logo for Twitter" src="/icon-twitter.svg" /></a>
          <a href="#"><img alt="Logo for Instargram" src="/icon-instagram.svg" /></a>
        </nav>
      </footer>
  )
}

export default Footer