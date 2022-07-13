
import React, { useRef, useEffect, useState } from 'react'
import style from '../Quantity/Quantity.module.css'
import { useStore1 } from '../../store'


export const Quantity = (props) => {

    let quantity = useRef()
    const [count, setCount] = useState(0)

    const submitHandler = (e) => {
        e.preventDefault()

        const enteredDataid = props.id
        const enteredMenu = props.menudata
        const enteredQuantity = quantity.current.value

        useStore1.setState({
            Quantity:quantity.current.value,
            mname:props.menudata.mname,
            id:props.id,
            amount:props.menudata.amount,
        })
        
        props.onQuantity(enteredQuantity, enteredMenu, enteredDataid)
        quantity.current.value=""
    }

   

    return (
        <div className={style.quantitydiv}>
            <form onSubmit={submitHandler}>
                <p>Quantity  {" "}
                    <input type="number" className={style.quantityIp} ref={quantity} 
                      // onChange={(e)=>useStore1.setState({sname:e.target.value})}
                      
                    />
                </p>
                <button className={style.addbtn} type="submit"> +Add</button>
            </form>
        </div>
    )
}