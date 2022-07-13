
import style from '../Header/Header.module.css'
import { Cart } from '../Cart/Cart'

export const Header =()=>{

    return(
        <header className={style.header}>
            <div className={style.title}>Food Delivery</div>
            <Cart />
        </header>
    )
}