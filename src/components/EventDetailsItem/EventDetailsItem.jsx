import { useParams, useNavigate } from "react-router-dom"
import css from './EventDetailsItem.module.css'
import { useState, useEffect } from "react";
import { getEventById, deleteEvent } from "../../utils/services/eventService";


const EventDetailsItem = () => {
    const navigate = useNavigate();

    const [color, setColor] = useState(null);
    const [event, setEvent] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchEvents = async () => {
        try {
            const evenData = await getEventById(id);
            setEvent(evenData);
        } catch (error) {
            console.error(error.message);
        }
        }

        fetchEvents();
    }, []); 


    useEffect(() => {
    switch (event.priority) {
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
    }, [event.priority])
    
    const deleteEventById = (id) => {
        deleteEvent(id)
            navigate('/');  
    }
    
    return (
        <div className={css.wrapper}>
            <div className={css.imgWrapper}>
                <img src={event.photo} alt={event.name} className={css.img} />
            </div>
            <div className={css.contentWrapper}>
                <p className={css.contentTitle}>{event.description}</p>
                <ul className={css.contentList}>
                    <li className={css.contentItem}><p>{event.category}</p></li>
                    <li className={css.contentItem} style={{ color: color }}><p>{event.priority}</p></li>
                    <li className={css.contentItem}><p>{event.location}</p></li>
                    <li className={css.contentItem}><p>{event.date} at {event.time}</p></li>
                </ul>
            </div>
            <div className={css.btnWrapper}>
                <button className={css.editBtn} type='button' onClick={() => console.log('edit')}>Edit</button>
                <button className={css.deleteBtn} type='button' onClick={() => deleteEventById(id)}>Delete event</button>
            </div>
        </div>
    )
}

export default EventDetailsItem