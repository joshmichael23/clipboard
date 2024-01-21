import React from 'react'

const Content = () => {
  return (
    <div className='grid gap-y-12 px-8 text-cl-GrayishBlue justify-items-center lg:grid-cols-3'>
        <div className='text-center text-base flex flex-col gap-y-4 lg:col-start-1 lg:col-end-4'>
          <h2 className='text-2xl font-bold text-cl-DarkGrayishBlue lg:text-3xl'>Access Clipboard anywhere</h2>
          <p>Whether you’re on the go, or at your computer, you can access all your Clipboard <span className='lg:block'>snippets in a few simple clicks.</span></p>
        </div>

        <img src="/image-devices.png" className="lg:col-start-1 lg:col-end-4" alt="Picture showing two devices" />

        <div className='text-center flex flex-col gap-4 lg:col-start-1 lg:col-end-4'>
          
          <h2 className='text-2xl font-bold text-cl-DarkGrayishBlue lg:text-3xl'>Supercharge your workflow</h2>
          <p>We’ve got the tools to boost your productivity.</p>
        </div>

        <div className='text-center grid gap-y-12 lg:col-start-1 lg:col-end-4 lg:grid-cols-3 lg:max-w-[1100px] lg:gap-x-8'>
          <section className='grid justify-items-center items-start gap-y-2' >
            <img src="/icon-blacklist.svg" alt="Blacklist" />
          
            <h3 className='text-xl font-bold text-cl-DarkGrayishBlue lg:text-2xl'>Create blacklists</h3>
            <p className=''>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
          </section>
          <section className='grid justify-items-center items-start gap-y-2'>
            <img src="/icon-text.svg" alt="Text" />
            <h3 className='text-xl font-bold text-cl-DarkGrayishBlue lg:text-2xl'>Plain text snippets</h3>
            <p className=''>Remove unwanted formatting from copied text for a consistent look.</p>
          </section>
          <section className='grid justify-items-center items-start gap-y-2'>
            <img src="/icon-preview.svg" alt="Sneak Preview" />
            <h3 className='text-xl font-bold text-cl-DarkGrayishBlue lg:text-2xl'>Sneak preview</h3>
            <p className=''>Quick preview of all snippets on your Clipboard for easy access.</p>
          </section>
        </div>

      </div>
  )
}

export default Content