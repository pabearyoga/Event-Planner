import css from './EventCardItem.module.css';
import { Btn } from '../../Btn/Btn';

export const EventCardItem = ({ data }) => {

    const images = {
  img1: require('../../../images/img1.jpg'),
  img2: require('../../../images/img2.jpg'),
  img3: require('../../../images/img3.jpg'),
  img4: require('../../../images/img4.jpg'),
  img5: require('../../../images/img5.jpg'),
  img6: require('../../../images/img6.jpg'),
  img7: require('../../../images/img7.jpg'),
img8: require('../../../images/img8.jpg'),
  
    };
  
    return (
        <div className={css.wrapper}>
            <div className={css.cardThumb}>
                <div className={css.imgWrapper} >
                    <img src={images[data.photo]} className={css.img} alt={data.name}></img>
                </div>
                <div className={css.overlay}>
                    <div className={css.overlayHeader}>
                        <p>{data.date} at {data.time}</p>
                        <p>{data.location}</p>
                    </div>
                    <div className={css.overlayContent}>
                        <p className={css.overlayContentTitle}>{data.name}</p>
                        <p className={css.overlayContentText}>{data.description}</p>
                    </div>
                    <div className={css.overlayBtnWrapper}>
                        <Btn style={{ padding: "10px 24px" }}>More info</Btn>
                    </div>
                </div>
            </div>
        </div>
    )
};