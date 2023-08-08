import { DayPicker } from 'react-day-picker';
import css from './Datepicker.module.css';
import React, { useState } from 'react';

const DatePicker = ({
    onClose,
    onSelectDate,
}) => {
    const classNames = {
        caption: css.caption,
        caption_label: css.month,
        nav: css.nav,
        nav_button: css.navBtn,
        nav_icon: css.navIcon,
        table: css.table,
        head: css.head,
        head_cell: css.dayOfWeek,
        row: css.row,
        cell: css.cell,
        day: css.calendarDay,
        day_today: css.today,
        day_selected: css.selected
    };

    const [selectedDay, setSelectedDay] = useState(Date());



    const chooseDate = () => {
        onSelectDate(selectedDay)
    }
    
    return (
        <div className={css.wrapper}>
            <DayPicker
                mode="single"
                classNames={classNames}

                selected={selectedDay}
                onSelect={setSelectedDay}
            />

            <div className={css.actions}>
                <button 
                    type="button"
                    className={css.cancelBtn}
                    onClick={onClose}
                >
                    Cancel
                </button>
                <button 
                    type="button"
                    className={css.selectBtn}
                    onClick={chooseDate}
                >
                    Choose date
                </button>
            </div>
        </div>
    );
}

export default DatePicker