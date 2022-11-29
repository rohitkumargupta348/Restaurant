import React from 'react'

const Navbar=({filter,menulist})=>{
  return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>
        {
        menulist.map((currEle)=>{
            return(
                <button className='btn-group__item' onClick={()=>filter(currEle)}>
                   {currEle}
                </button>
            )
        })
    }
        </div>
    </nav>
    </>
  )
}

export default Navbar