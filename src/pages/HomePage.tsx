import CardMaker from '@/components/CardMaker'
import React from 'react'


const HomePage = () => {
  return (
    <>
      
      <div className=" CardDiv grid grid-cols-4 gap-12 bg-white p-22 rounded-xl">
  <CardMaker />
  <CardMaker />
  <CardMaker />
  <CardMaker />
  <CardMaker />
  <CardMaker />


</div>

  
    </>
  
  )
}

export default HomePage