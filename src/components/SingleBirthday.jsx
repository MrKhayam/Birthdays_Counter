import React from 'react'

const SingleBirthday = ({name,age,image,remove}) => {

  return (
      <>
    <div className="w-full hover:ring-4 hover:ring-offset-4 transition-all cursor-pointer ring-pink-500 mb-5 bg-[#24242427] shadow-lg rounded items-center justify-between p-5 flex">
        <div className="user flex items-center gap-3">
            <div className="img w-[70px] h-[70px] rounded-full">
                <img className='rounded-full w-full h-full object-cover' src={image}/>
            </div>
            <div className="info">
                <h2 className='text-xl font-semibold'>{name}</h2>
                <p className='text-sm text-slate-500'>{age} Years Old</p>
            </div>
        </div>
        <div className="button">
            <button onClick={()=>remove(name)} className='bg-pink-600 text-white hover:bg-pink-500 transition-all px-6 py-2 rounded'>Remove</button>
        </div>
    </div>
    </>
  )
}

export default SingleBirthday