import React from 'react'
import { useParams } from 'react-router-dom'

const Dynamic = () => {
  const { id } = useParams()
  return (
    <div>
      <h1 className='text-center-5xl font-bold justify-center'>This is dynamic page and ID is : {id}</h1>
    </div>
  )
}

export default Dynamic
