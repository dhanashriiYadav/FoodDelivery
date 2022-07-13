import style from '../ShowCart/ShowCart.module.css'
import { Card } from '../Card'
import { useRef, useState, useEffect } from "react";
import { useStore1 } from '../../../store';
import ReactDOM from 'react-dom';
import React from 'react';
import { FaRegWindowClose } from "react-icons/fa";
import { MdDelete} from 'react-icons/md';

const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onConfirm} />
}

const Modal = (props) => {
    const quantity = useRef()
    const menu = useStore1(state => state.menuList)
    const Count = useStore1(state => state.count)
    const Quanti = useStore1(state => state.Quantity)
    const id = useStore1(state => state.id)
    const mname = useStore1(state => state.mname)
    const amount = useStore1(state => state.amount)

    // console.log('menu', menu)

    let finalTotal = 0, total = 0

    //Total calculate
    const val = menu.reduce((accumulator, current) => accumulator + +(current.amount * current.Quantity), 0);
    // console.log(val)

    const [Menu, setNewMenu] = useState(menu)
    const [Val, setVal] = useState(val)
    const [count, setCount] = useState(Count)
    //Decreese Quantity

    const removeNode = (item, index) => {

        var menucopy = [...Menu]
        menucopy.splice(index, 1)
        setVal(Val - (item.amount * item.Quantity))

        setNewMenu(menucopy)

        // setNewMenu(data=>
        //     data.filter(menus=>{
        //         return {index} !==0
        //     })
        //     )
    }

    // const removeNode=(index)=>document.getElementById(`id-${index}`).remove         

    //menu.splice(index,1)  //delete item also working
    return (
        <>
            {
                menu.length === 0 ?
                    // <p>Data not found</p>
                    null
                    :
                    <Card className={style.card}>
                        <div className={style.closebtnDiv}>
                        <button className={style.closebtn} onClick={props.onConfirm}><FaRegWindowClose /></button>
                        </div>
                        <div>
                        {
                            Menu.map((item, index) => (
                                <div key={index} id={`id-${index}`} className={style.cartCard}>

                                    <span>{item.mname}</span>
                                    <p>${item.amount}{" x"}{" "}
                                        <span><input type="number" defaultValue={item.Quantity} onChange={(e) => {
                                            useStore1.setState({
                                                Quantity: e.target.value,
                                                // item.Quantity: 
                                            })
                                        }} className={style.Quantityip}
                                        />
                                        </span>={' '}
                                        <span>{item.amount * item.Quantity}</span>
                                        <span>
                                        <button onClick={() => removeNode(item, index)} className={style.delete}>
                                            < MdDelete size={'30px'}/>
                                    </button>
                                        </span>

                                    </p>
                                    
                                    <hr />
                                </div>

                            ))

                        }

                        <p className={style.total}>Total:{Val}</p>
                        </div>
                    </Card>

            }
        </>
    )

}

export const ShowCart = (props) => {

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Modal onConfirm={props.onConfirm} onDelete={props.onDeleteItem} />, document.getElementById('modal-root')
            )}

        </>
    )

}