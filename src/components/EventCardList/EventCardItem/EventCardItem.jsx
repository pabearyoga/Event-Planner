import { useState, useEffect } from "react";
import css from './EventCardItem.module.css';
import { Btn } from '../../Btn/Btn';

export const EventCardItem = ({ data }) => {

    const [color, setColor] = useState(null);

    useEffect(() => {
        switch (data.priority) {
            case "high":
                setColor("var(--hight)");
                break;
            case "medium": 
                setColor("var(--medium)");
                break;
            case "low": 
                setColor("var(--low)");
                break;
            default:
                return;
        }
    }, [data.priority])

  
    return (
        <div className={css.wrapper}>
            <div className={css.cardThumb}>
                <div className={css.filterInfo}>
                    <div className={css.filterInfoItem}>{data.category}</div>
                    <div className={css.filterInfoItem} style={{ color: color }}>{data.priority}</div>

                </div>
                <div className={css.imgWrapper} >
                    <img src={data.photo} className={css.img} alt={data.name}></img>
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
                        <Btn style={{ padding: "10px 24px" }} onClick={()=> console.log(data.id)}>More info</Btn>
                    </div>
                </div>
            </div>
        </div>
    )
};