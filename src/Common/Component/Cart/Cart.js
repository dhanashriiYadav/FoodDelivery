
import { FiShoppingCart } from "react-icons/fi";
import { Wrapper } from "../../Wrapper/Wrapper";
import style from '../Cart/Cart.module.css'
import { useStore1 } from "../../../store";
// import { useRef, useState, useEffect } from "react";
import { ShowCart } from "../../../Component/UI/ShowCart/ShowCart";
import { useState } from "react";



export const Cart = () => {
  const [show, setShow]=useState(false)
  const count =useStore1(state=>state.count)
  const menu = useStore1(state => state.menuList)
  let dataCount = menu.filter(item => item).length
    useStore1.setState({
        count: dataCount,
    })
  const submitHandler=(e)=>{
    e.preventDefault()
    setShow(true)
  }
  const closeHandler=()=>{
    setShow(null)
  }

 

  return (
    <Wrapper>
      {
        show && (<ShowCart onConfirm={closeHandler} />)
      }
      <form className={style.cart} onSubmit={submitHandler}> 
        <FiShoppingCart />{" "}
        <button type='submit' className={style.viewCartBtn}>view cart</button>
        {" "}
        <input type="number" value={count} className={style.cartip}/>

      </form>
      
    </Wrapper>
  )
}

