import React from 'react'
import { HashLoader } from 'react-spinners'

export default function Loader() {
  return (
    <>
    <div className='col-span-12 flex flex-col justify-center items-center'>
    <HashLoader
  color="#0aad0a"
  cssOverride={{}}
  loading
  size={70}
  speedMultiplier={1}
/>
</div>
    </>
  )
}
