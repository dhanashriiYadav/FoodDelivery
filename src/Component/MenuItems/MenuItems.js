
// import { data } from 'jquery'
import { Wrapper } from '../../Common/Wrapper/Wrapper'
import style from './MenuItems.module.css'
import { Quantity } from '../Quantity/Quantity'
import React, { useState } from 'react'
// import create from 'zustand'
import { useStore1 } from '../../store'




const MenuData = [
    {
        mname: 'Sushi',
        desc: 'Finest fish and veggies',
        amount: '22.00',
    },
    {
        mname: 'Pizza',
        desc: 'With Cheese and fresh',
        amount: '30.0',
    },
    {
        mname: 'Barbecue Burger',
        desc: 'American,meaty',
        amount: '12.01',
    },
    {
        mname: 'Green Bowl',
        desc: 'Healty.. and Green',
        amount: '40.00',
    },

]
// for (let i = 0; i < MenuData.length; i++) {

//     <div className={style.menu}>
//         <p>{MenuData.mname}</p>
//         <p>{MenuData.desc}</p>
//         <p>{MenuData.amount}</p>
//     </div>

// }
// export const useStore1=create((set)=>({
//     sname:['doe'],

// }))

export const MenuItems = (props) => {
    const [userData, setUserData] = useState([])
    const onQuantityHandler = (enteredQuantity, enteredMenu, enteredDataid) => {
        setUserData((data) => {
            return [
                ...data,
                {
                    Quantity: enteredQuantity,
                    mname: enteredMenu.mname,
                    amount:enteredMenu.amount,
                    id: enteredDataid,
                }
            ]
        })
     
       
    }

    // console.log('inside MenuItem data:', userData)
    useStore1.setState({
        menuList:userData
    
    })
    

    const MenuContent = MenuData.map((data, index) => (
        <div className={style.outerMenu} key={index}>
            <div className={style.menu} >

                <p className={style.mname}>{data.mname}</p>
                <p>{data.desc}</p>
                <p>$ {data.amount}</p>

            </div>
           
            <Quantity menudata={data} id={index} onQuantity={onQuantityHandler} />
    
            {/* <Quantity /> */}
        </div >
    ))
    // console.log({MenuContent})


    return (
        // <Wrapper>
        //      <div className={style.menu}>    
        //     <p>{MenuData[0].mname}</p>
        //     <p>{MenuData[0].desc}</p>
        //     <p>{MenuData[0].amount}</p>
        // </div>

        // </Wrapper>
        <Wrapper>

            {MenuContent}

        </Wrapper>
    )
}

// export default menuContext
// export default useStore