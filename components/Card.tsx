import React from "react"
import { InformationCircleIcon } from "@heroicons/react/outline"
import Link from "next/link"
import Image from "next/image"

const Card = ({ name, src }) => {
  //state called revealCard to show the card
  const [revealCard, setRevealCard] = React.useState(false)
  const [imageLoad, setImageLoad] = React.useState(false)
  return (
    <div className="inline-block px-3 ">
      <div
        onMouseOver={() => setRevealCard(true)}
        onMouseLeave={() => setRevealCard(false)}
        className="w-64  md:w-96 relative cursor-pointer h-64 max-w-xs overflow-hidden rounded-lg shadow-2xl  hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
        <Image
          src={src}
          layout="fill"
          alt={src}
          className="object-cover rounded-lg z-30 "
          onLoadingComplete={() => setImageLoad(true)}
        />
        {revealCard && imageLoad && (
          <div className="w-full h-full rounded-lg absolute top-0 flex flex-col justify-evenly items-center ite bg-black opacity-80 z-50">
            <p className="text-2xl font-bold md:text-3xl">{name}</p>
            <div className="flex space-x-8">
              <Link href={`/${name}`}>
                <a className="text-white hover:text-blue-500 scale-110 hover:scale-125 flex space-x-2 justify-center items-center">
                  <p>View Details</p>
                  <InformationCircleIcon className="w-[25px]" />
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
