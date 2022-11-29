import React, { useState } from 'react'
import './styles.css'
import Menu from './menu_api'
import Menu_card from './menu_card';
import Navbar from './navbar';
const uniquelist=[
    ...new Set(
        Menu.map((currEle)=>{
            return currEle.category;
        })
    ),"All",
];
const Resturant=()=> {
    const[Menudata,setMenudata]=useState(Menu);
    const[menulist,setmenulist]=useState(uniquelist);
    const filter=(category)=>{
        if(category==="All"){
            setMenudata(Menu);
            return;
        }
        const updatedcategory=Menu.filter((currEle)=>{
            return currEle.category===category;
        });
        setMenudata(updatedcategory);
    }
  return (
    <>
    <Navbar filter={filter} menulist={menulist}/>
    <Menu_card Menudata={Menudata} />
    </>
  )
}

export default Resturant