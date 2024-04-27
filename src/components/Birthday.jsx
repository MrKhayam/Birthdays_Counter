import React, { useState } from 'react'
import SingleBirthday from './SingleBirthday'
import bdays from '../data'

const Birthday = () => {
    const [nbdyas, setNbdays] = useState(bdays);
    const handleClick = () => {
        nbdyas.length === 0 ? (
        setNbdays(bdays)
        ) : (
        setNbdays([])
        )
    }
    const removeData = (name) => {
        
        const newData = nbdyas.filter((person)=>{
            return (
                person.name !== name
                )
            })
            setNbdays(newData)
    }
  return (
    <>
    <div className="relative main-container w-[600px] bg-white  p-5 shadow-lg rounded m-auto">
    <h1 className='text-center text-3xl mb-7 font-semibold'>
        {nbdyas.length} Birthdays Today</h1>
    {
        nbdyas.map((item,index)=>{
            return(
                <SingleBirthday key={index} remove = {removeData} {...item}/>
            )
        })
    }
    <div className="remveAll w-full flex justify-center items-center">
        <button className='px-14 hover:bg-pink-500 transition-all bg-pink-600 py-4 text-white text-xl rounded-full' onClick={handleClick}>{nbdyas.length === 0 ? 'Refresh' : 'Clear'}</button>
    </div>
    </div>
    </>
  )
}

export default Birthday