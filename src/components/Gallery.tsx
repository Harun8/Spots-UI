import React, { useState } from 'react'

import CardMaker from './CardMaker';
import { Button } from './ui/button';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState()
  return (
    <>
        <section className="px-8  pb-10">
      <div className="container mx-auto mb-20 text-center">
      <p className='font-semibold text-left text-gray-700 text-3xl !leading-snug lg:mb-3 lg:text-5xl'>
              Discover More Than Just Places
            </p>

        <div className="mt-10 flex items-center justify-center gap-12">


          <Button variant="green"> Scenic </Button>
          <Button variant="green"> Café </Button>
          <Button variant="green"> Sunrise </Button>

          <Button variant="green"> Sunset </Button>

          <Button variant="green"> Hidden spot </Button>


          {/* <Button variant="green"> Click </Button>
          <Button variant="green"> Click </Button>
          <Button variant="green"> Click </Button> */}


        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
     <CardMaker></CardMaker>
     <CardMaker></CardMaker>
     <CardMaker></CardMaker>
     <CardMaker></CardMaker>
     <CardMaker></CardMaker>
      </div>
      <div className="grid place-items-center">
     
      </div>
    </section>
    </>
  )
}

export default Gallery