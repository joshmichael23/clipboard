import React from 'react'

const Brands = () => {
  return (
    <div className='grid justify-items-center'>
        <div className='lg:max-w-[1100px] grid items-center justify-items-center px-8 py-16 gap-16 lg:grid-cols-5'>
            <img src="/logo-google.png" alt="Logo for Google" />
            <img src="/logo-ibm.png" alt="Logo for IBM" />
            <img src="/logo-microsoft.png" alt="Logo for Microsoft" />
            <img src="/logo-hp.png" alt="Logo for HP" />
            <img src="/logo-vector-graphics.png" alt="Logo for Vector Graphics" />
            <div className='text-center grid gap-8 place-items-center text-cl-GrayishBlue lg:col-start-1 lg:col-end-6 pt-[100px]'>
            <h2 className='text-3xl font-semibold text-cl-DarkGrayishBlue'>Clipboard for iOS and Mac OS</h2>
            <p>
                Available for free on the App Store. Download for Mac or iOS, sync with iCloud
                and you’re ready to start adding to your clipboard.
            </p>
            <div className='grid gap-8 lg:grid-cols-2'>
                <button className='rounded-full w-[300px] bg-cl-StrongCyan hover:bg-cl-StrongCyan2  transition duration-200 text-white font-semibold p-4 text-lg lg:w-[220px] lg:p-2'>Download for iOS</button>
              <button className='rounded-full w-[300px] bg-cl-LightBlue hover:bg-cl-LightBlue2 text-white font-semibold p-4 text-lg lg:w-[220px] transition duration-200'> Download for Mac</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Brands