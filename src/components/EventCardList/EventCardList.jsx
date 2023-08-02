import {EventCardItem} from './EventCardItem/EventCardItem';
import css from './EventCardList.module.css'


const EventCardList  = ({eventData }) => (

  <ul className={css.cardList}>
    {eventData.map(eventData => (
      <li  className={css.cardItem} key={eventData.id}>
        <EventCardItem data={eventData} />       
      </li>))}
  </ul>
  );

export default EventCardList
