
import React from 'react'
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
const CardMaker = () => {
  return (
    <div>

    <Card className="w-[350px]">
    <div className="relative inline-block">
      <img className="rounded-xl" src={teffish} alt="Descriptive Alt Text" />
      <Badge 
        variant="scenic" 
      >
        Scenic
      </Badge>
    </div>
          <CardHeader>
            {/* <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription> */}
          </CardHeader>
         
          <CardContent>
          <div className="flex items-center justify-between text-sm font-serif">
  {/* Left SVG and Text */}
  <div className="flex items-center gap-1">
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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 576 512"
  >
    <path
      fill="#000000"
      d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
    />
  </svg>
</div>


          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
        </div>
  )
}

export default CardMaker