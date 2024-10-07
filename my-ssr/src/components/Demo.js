// Components/Demo.js
import React from 'react';
import Image from 'next/image';

const Demo = ({ data }) => {
  return (
    <div className="min-h-[100px] grid gap-0 scroll-smooth font-serif">
      {/* Title and Meta Section */}
      <div className="grid w-full h-full gap-1 px-2 py-4 m-4 mx-2 sm:grid-cols-12 bg-lightBlue">
        <div className="min-h-[100px] sm:col-span-8">
          <h1 className="px-8 py-4 text-lg font-bold leading-tight tracking-normal md:text-2xl lg:text-4xl md:font-extrabold lg:leading-loose">
            {data.title}
          </h1>
          <p className="px-6 mx-2 text-xs leading-tight tracking-normal text-blue-500 md:text-sm lg:text-base md:font-extrabold lg:leading-loose lg:tracking-wider">
            Posted on {data.meta.postedOn}, {data.meta.time}
          </p>
        </div>

        <div className="min-h-[100px] sm:col-span-4">
          <Image 
            src={data.image.src} 
            className="w-full h-full px-2 py-2 rounded-xl" 
            alt={data.image.alt} 
            width={500} 
            height={300} 
          />
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="grid gap-4 m-4 space-y-4 sm:grid-cols-12">
        <div className="min-h-[100px] text-left capitalize sm:col-span-3 space-y-4 px-8 py-9">
          <h1 className="font-bold text-black">Table of Contents</h1>
          {data.tableOfContents.map(item => (
            <a href={`#${item.id}`} key={item.id}>
              <h2 className="font-bold text-black">{item.title}</h2>
            </a>
          ))}
        </div>

        <div className="min-h-[100px] sm:col-span-9 space-y-4 px-6 py-5">
          <p>{data.intro.text}</p>

          {data.sections.map(section => (
            <div key={section.id}>
              <h2 id={section.id} className="font-bold">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;
