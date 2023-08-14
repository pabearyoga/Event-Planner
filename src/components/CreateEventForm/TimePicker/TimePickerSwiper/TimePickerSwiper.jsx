import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

import styles from './TimePickerSwiper.module.css';

const TimePicker = ({onSelectTime}) => {
  const [selectedHour, setSelectedHour] = useState(12);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState('AM');

  const hours = Array.from({ length: 12 }, (_, index) => index + 1);
  const minutes = Array.from({ length: 60 }, (_, index) => index);
  const periods = ['AM', 'PM'];

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
  };

  const handleMinuteChange = (minute) => {
      setSelectedMinute(minute);
    };
    
    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
    };

    const timeFormat = (time) => {
        return time < 10 ? `0${time}` : time
    }

    const time = `${selectedHour}:${selectedMinute} ${selectedPeriod}`;

    onSelectTime(time)
    
  return (
      <div className={styles.timePicker}>
          <div className={styles.visionLine}></div>
        {/* hour */}
        <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={true}
            modules={[Mousewheel]}
            initialSlide={3}
            onSlideChange={(swiper) => {handleHourChange(timeFormat(hours[swiper.activeIndex]))}}
            className={styles.swiper}
            >
            {hours.map((hour) => (
                <SwiperSlide className={styles.swiperSlide} key={hour}>
                    {({ isActive }) => (
                        <div className={isActive && styles.selected}>
                            {timeFormat(hour)}
                        </div>
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
        {/* minute */}
        <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={true}
            modules={[Mousewheel]}
            initialSlide={3}
            onSlideChange={(swiper) => {handleMinuteChange(timeFormat(minutes[swiper.activeIndex]))}}
            className={styles.swiper}
            >
            {minutes.map((minute) => (
                <SwiperSlide className={styles.swiperSlide} key={minute}>
                    {({ isActive }) => (
                        <div className={isActive && styles.selected}>
                            {timeFormat(minute)}
                        </div>
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
        {/* period */}
        <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={true}
            modules={[Mousewheel]}
            initialSlide={3}
            onSlideChange={(swiper) => {handlePeriodChange((periods[swiper.activeIndex]))}}
            className={styles.swiper}
            >
            {periods.map((period) => (
                <SwiperSlide className={styles.swiperSlide} key={period}>
                    {({ isActive }) => (
                        <div className={isActive && styles.selected}>
                            {period}
                        </div>
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
      
    </div>
  );
};

export default TimePicker;
