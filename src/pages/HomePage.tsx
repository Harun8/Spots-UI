import CardMaker from '@/components/CardMaker'
import React from 'react'
import { Button, Typography } from "@material-tailwind/react";

import img1 from "@/image/spotsImgs/views1.jpg"
import img2 from "@/image/spotsImgs/views2.jpg"
import img3 from "@/image/spotsImgs/views3.jpg"
import img4 from "@/image/spotsImgs/views4.jpg"
import img5 from "@/image/spotsImgs/views5.jpg"
import img6 from "@/image/spotsImgs/views6.jpg"
import Gallery from '@/components/Gallery';


const HomePage = () => {
  return (
    <header className="mt-12 bg-white px-8">
      <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto lg:-mt-40">
          
          <div className='mb-2 max-w-sm'>
            <p className='font-semibold text-left text-gray-700 text-3xl !leading-snug lg:mb-3 lg:text-5xl'>
              Discover More Than Just Places
            </p>

          </div>
          {/* <Typography
            variant="h1"
            color="red"
            className="text-3xl !leading-snug" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            40% OFF
          </Typography> */}
          {/* <Typography
            variant="h1"
            color="blue-gray"
            className="mb-2 max-w-sm text-3xl !leading-snug lg:mb-3 lg:text-5xl"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Back-to-School Campaign
          </Typography>
          <Typography
            variant="lead"
            className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            We&apos;ve got everything you need to make this school year a
            smashing success! Whether you&apos;re a student, parent, or
            educator, we&apos;ve got everything you need.
          </Typography> */}
          {/* <Button size="lg" color="gray"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            see offers
          </Button> */}
        </div>
        <div className="mt-40 grid gap-6 lg:mt-0">
          <div className="grid grid-cols-4 gap-6 pt-22">
            <img
              width={768}
              height={760}
              src={img1}
              className="rounded-lg shadow-md"
              alt="flowers"
            />
            <img
              width={768}
              height={768}
              src={img2}
              className="-mt-28 rounded-lg shadow-md"
              alt="flowers"
            />
            <img
              width={768}
              height={768}
              src={img3}
              className="-mt-14 rounded-lg shadow-md"
              alt="flowers"
            />
            <img
              width={768}
              height={768}
              src={img4}
              className="-mt-20 rounded-lg shadow-md"
              alt="flowers"
            />
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div></div>
            <img
              width={768}
              height={768}
              src={img5}
              className="-mt-28 rounded-lg shadow-md"
              alt="flowers"
            />
            <img
              width={768}
              height={768}
              src={img6}
              className="-mt-14 rounded-lg shadow-md"
              alt="flowers"
            />
            <img
              width={768}
              height={768}
              src={img3}
              className="-mt-20 rounded-lg shadow-md"
              alt="flowers"
            />
          </div>
        </div>
      </div>

      <Gallery></Gallery>

    </header>
  );
}

export default HomePage