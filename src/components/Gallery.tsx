import React, { useState } from 'react'

import CardMaker from './CardMaker';
const BOOKS = [
    {
      img: `/image/books/RectangleBig1.svg`,
      category: "Natasha Wing",
      title: "The Night Before Kindergarten",
      desc: "A heartwarming and humorous picture book that eases the jitters of starting kindergarten.",
      price: "$99",
      offPrice: "$79",
    },
    {
      img: `/image/books/RectangleBig6.svg`,
      category: "James Patterson",
      title: "Middle School: The Worst Years of My Life",
      desc: "A funny and relatable novel about the challenges of navigating middle school.",
      price: "$99",
      offPrice: "$79",
    },
    {
      img: `/image/books/RectangleBig2.svg`,
      category: "Helen W. Colby",
      title: "College Student: A Comprehensive Checklist",
      desc: "A practical guidebook that helps college students prepare for the transition to university.",
      price: "$99",
      offPrice: "$79",
    },
    {
      img: `/image/books/RectangleBig3.svg`,
      category: "Walter Pauk",
      title: "How to Study in College",
      desc: "A valuable resource for high school seniors and college freshmen, offering effective study strategies.",
      price: "$99",
      offPrice: "$79",
    },
    {
      img: `/image/books/RectangleBig4.svg`,
      category: "William Strunk Jr.",
      title: "The Elements of Style",
      desc: "A classic reference book on grammar and writing skills, essential for high school and college students.",
      price: "$99",
      offPrice: "$79",
    },
    {
      img: `/image/books/RectangleBig5.svg`,
      category: "William Strunk Jr.",
      title: "The Elements of Style",
      desc: "A classic reference book on grammar and writing skills, essential for high school and college students.",
      price: "$99",
      offPrice: "$79",
    },
  ];
  
  const BOOKS_TABS = [
    "history",
    "law",
    "math",
    "economy",
    "business",
    "communication",
  ];

const Gallery = () => {
    const [activeTab, setActiveTab] = useState()
  return (
    <>
        <section className="px-8  pb-10">
      <div className="container mx-auto mb-20 text-center">
      <p className='font-semibold text-left text-gray-700 text-3xl !leading-snug lg:mb-3 lg:text-5xl'>
              Discover More Than Just Places
            </p>

        <div className="mt-10 flex items-center justify-center">

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