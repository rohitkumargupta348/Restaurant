import React from 'react'

const Menu_card=({Menudata})=> {
       
    return(
        <>
    <section className='main-card-container'>
    {Menudata.map((currEle)=>{
        const {id,image,name,category,price,description}=currEle;
        return(
            <>
        <div className='card-container' key={id}>
        <div className='card'>
            <div className='card-body'>
                <span className='card-numer card-circle subtle'>
                    {id}
                </span>
                <span className='card-author subtle'>
                    {name}
                </span>
                <h2 className='card-title'>{name}</h2>
                <span className='card-description subtle'>
                {/* Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. */}
                {description}
                </span>
                <div className='Read'>
                    Read
                </div>
                </div>
                <img src={image} alt="Maggi-image" className="card-media"/>

                <span className='card-tag subtle'>Order Now</span>
        </div>
    </div>
    </>
    )
        }) }
        </section>
    </>)
}

export default Menu_card