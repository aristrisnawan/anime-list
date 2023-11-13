import Image from 'next/image'
import React from 'react'

const AnimeList = ({title, images}) => {
  return (
      <div className=''>
        <Image src={images} alt='...' width={350} height={350}/>
        <h3 className=' font-bold md:text-xl p-4 text-md'>{title}</h3>
      </div>
  )
}

export default AnimeList
