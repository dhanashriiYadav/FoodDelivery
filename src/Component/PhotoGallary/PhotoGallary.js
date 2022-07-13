import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import style from '../PhotoGallary/PhotoGallary.module.css'
// import imgsrc from '../../Images/burgers.jpg'

export const PhotoGallary = () =>{

    return(
        <div >
      
        <Carousel autoPlay infiniteLoop stopOnHover showThumbs={false}>
            <div className={style.photoDiv}>
                <img src='./images/idli.jpg' alt="food"/>
         
            </div >
            <div className={style.photoDiv}>
                <img src="./images/dosa.jpg" alt="food"/>
             
            </div>
            <div className={style.photoDiv}>
                <img src="./images/medu-vada.jpg" alt="food"/>
               
            </div>
            <div className={style.photoDiv}>
                <img src="./images/vada.jpeg" alt="food"/>
              
            </div>
            <div className={style.photoDiv}>
                <img src="./images/fish.png" alt="food"/>
               
            </div>
            <div className={style.photoDiv}>
                <img src="./images/chikan.jpg" alt="food"/>
              
            </div>
        </Carousel>
    </div>
    )
}