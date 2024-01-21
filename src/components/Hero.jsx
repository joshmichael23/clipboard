import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='grid text-cl-GrayishBlue place-items-center gap-y-16 p-8 text-base lg:grid-cols-2 lg:gap-y-0 pb-32 '>
            <section className='text-center flex flex-col gap-4 lg:max-w-[700px] lg:col-start-1 lg:col-end-3 lg:pb-[100px]' >
              <h2 className='text-2xl font-semibold text-cl-DarkGrayishBlue lg:text-3xl'>Keep track of your snippets</h2>
              <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your <span className='lg:block'>snippets immediately on all your devices. Our Mac and iOS apps will help you organize</span> everything.</p>
            </section>
            <img className="lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-5 lg:scale-110 lg:translate-x-[-5%]" src="/image-computer.png" alt="Monitor" />

            <section className='text-center flex flex-col gap-4 lg:max-w-[350px] lg:text-start lg:gap-2 lg:justify-self-start lg:pl-28'>
            <h3 className='text-xl font-semibold text-cl-DarkGrayishBlue'>Quick Search</h3>
            <p>Easily search your snippets by content, category, web address, application, and more.</p>
            </section>

            <section className='text-center flex flex-col gap-4 lg:max-w-[350px] lg:text-start lg:gap-2 lg:justify-self-start lg:pl-28'>
            <h3 className='text-xl font-semibold text-cl-DarkGrayishBlue'>iCloud Sync</h3>          
            <p>Instantly saves and syncs snippets across all your devices.</p>
            </section>

            <section className='text-center flex flex-col gap-4 text-cl-DarkGrayishBlue lg:max-w-[350px] lg:text-start lg:gap-2 lg:justify-self-start lg:pl-28'>
            <h3 className='text-xl font-semibold'>Complete History</h3>
            <p>Retrieve any snippets from the first moment you started using the app.</p>
            </section>
      </div>
    </>
  )
}

export default Hero