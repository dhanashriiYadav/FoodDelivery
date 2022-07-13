
import style from '../Mobile/Mobile.module.css'
import { PhotoGallary } from '../PhotoGallary/PhotoGallary'

export const Mobile = props =>{


    return(
        <div className={style.mbimg}>
                <div className={style.mbinnerdiv} >
                    <PhotoGallary />
                </div>
        </div>
    )
}