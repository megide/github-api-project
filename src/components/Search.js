import React from 'react'

function Search({ searchTxt, setSearchTxt,onkey }) {
  return (
    <div className='flex justify-center mt-10 w-full text-align-center'>
      <input 
      placeholder='Search a user' 
      className='border px-10 py-2 max-w-md rounded-full text-gray-900' 
      type="text" 
      value={searchTxt}
      onKeyPress={onkey}
      onChange={(e)=>setSearchTxt(e.target.value)}/>

    </div>
  )
}

export default Search