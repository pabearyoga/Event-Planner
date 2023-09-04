import css from './EventDetailsItem.module.css'
import { useState, useEffect } from "react";

import testImg from '../../images/img1.jpg' 


const EventDetailsItem = () => {
    const [color, setColor] = useState(null);


//     useEffect(() => {
//     switch (data.priority) {
//         case "high":
//             setColor("var(--hight)");
//             break;
//         case "medium": 
//             setColor("var(--medium)");
//             break;
//         case "low": 
//             setColor("var(--low)");
//             break;
//         default:
//             return;
//     }
// }, [data.priority])
    
    return (
        <div className={css.wrapper}>
            <div className={css.imgWrapper}>
                <img src={testImg} alt="" className={css.img} />
            </div>
            <div className={css.contentWrapper}>
                <p className={css.contentTitle}>Description</p>
                <ul className={css.contentList}>
                    <li className={css.contentItem}><p>category</p></li>
                    <li className={css.contentItem} style={{ color: color }}><p>priority</p></li>
                    <li className={css.contentItem}><p>location</p></li>
                    <li className={css.contentItem}><p>date at time</p></li>
                </ul>
            </div>
            <div className={css.btnWrapper}>
                <button className={css.editBtn} type='button' onClick={()=> console.log('Edit')}>Edit</button>
                <button className={css.deleteBtn} type='button' onClick={()=> console.log('delete')}>Delete event</button>
            </div>
        </div>
    )
}

export default EventDetailsItem