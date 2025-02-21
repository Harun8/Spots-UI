
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import teffish from "@/assets/teffish.jpg"
import { Badge } from '@/components/ui/badge'
import Icons from './Icons'
const CardMaker = () => {

    const [liked, setLiked] = useState<boolean>(false) // default should be fetched

    const onHeartClick = () => {
        console.log("on Heart Clicked")
        setLiked((prev) => !prev)
    }
  return (
    <div>

    <Card className="w-[350px]">
    <div className="relative inline-block">
      <img className="rounded-t-xl" src={teffish} alt="Descriptive Alt Text" />
      <Badge 
        variant="scenic" 
      >
        Scenic
      </Badge>
    </div>
          <CardHeader>
 
          </CardHeader>
         
          <CardContent>
          <div className="flex items-center justify-between text-sm font-serif">
  {/* Left SVG and Text */}
  <div    style={{cursor: "pointer"}} className="flex items-center gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={20}
      viewBox="0 0 320 512"
      
    >
      <path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480l0-162.9c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9L192 480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
    </svg>
    <span>Show location</span>
  </div>

  {/* Right SVG */}
  
  <div className="flex items-center gap-1">

<Icons onHeartClick={onHeartClick} icon={liked}></Icons>
  
<span className='text-xs p-0 m-0'>100</span>

  </div>
</div>


          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </div>
  )
}

export default CardMaker