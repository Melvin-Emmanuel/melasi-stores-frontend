import React from 'react'
import { PuffLoader } from 'react-spinners'

const Spinner:React.FC = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <PuffLoader />
    </div>
  )
}

export default Spinner
