import { useParams, useNavigate } from "react-router-dom"
import css from './EventDetailsItem.module.css'
import { useState, useEffect } from "react";
import { getEventById, deleteEvent } from "../../utils/services/eventService";
import Title from '../Title/Title'


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
    }, [id]); 


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

    console.log(event)

    
    return (
        <>
            <Title style={{marginRight: 'auto',   display: 'block'}}>{event.name}</Title>

            <div className={css.wrapper}>
                <div className={css.imgWrapper}>
                    <img src={event.photo === 'https://res.cloudinary.com/dnsiuzg5g/image/upload/v1693941808/default_kl2nn5.png' ? 'https://res.cloudinary.com/dnsiuzg5g/image/upload/v1694291327/default_horizontal_s53gz0.png' : event.photo} alt={event.name} className={css.img} />
                </div>
                <div className={css.contentWrapper}>
                    <p className={css.contentText}>{event.description}</p>
                    <div className={css.contentList}>
                        <div className={css.contentFilterItemWrapper}>
                            <p className={css.contentItem}>{event.category}</p>
                            <p className={css.contentItem} style={{ color: color }}>{event.priority}</p>
                            <p className={css.contentItem}>{event.location}</p>
                        </div>
                        <p className={css.contentItem} style={{ marginRight: 'auto' }}>{event.date} at {event.time}</p>
                    </div>
                </div>
                <div className={css.btnWrapper}>
                    <button className={css.editBtn} type='button' onClick={() => navigate(`/edit/${event.id}`)}>Edit</button>
                    <button className={css.deleteBtn} type='button' onClick={() => deleteEventById(id)}>Delete event</button>
                </div>
                </div>
        </>

    )
}

export default EventDetailsItem