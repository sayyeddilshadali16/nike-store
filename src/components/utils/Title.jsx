import React from 'react'

const Title = ({ title }) => {
  return (
   <>
      <div className='mt-20 grid items-center'>
        <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900'>{title}</h1>
      </div>
   </>
  )
}

export default Title