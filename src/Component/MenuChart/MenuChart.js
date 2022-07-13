import { Card } from "../UI/Card"
import style from './MenuChart.module.css'
import { MenuItems } from "../MenuItems/MenuItems"


 export const MenuChart =()=>{



    return(
        <Card className={style.cardstyle}>
            <MenuItems />
        </Card>
    )
 }