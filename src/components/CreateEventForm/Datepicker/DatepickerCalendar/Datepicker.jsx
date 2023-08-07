import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import css from './Datepicker.module.css';

// Function to reformat day names to show in first three letters
const formatWeekdayName = (day) => format(day, 'EEE');

const DatePicker = ({
    startDate, 
    onSelect,
    onClose,
    onSave,
    onDayClick
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
    

    return (
        <div className={css.wrapper}>
            <DayPicker
                selected={startDate}
                mode="single"
                onSelect={onSelect}
                classNames={classNames}
                formatters={{formatWeekdayName}}
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
                    onClick={onSave}
                >
                    Choose date
                </button>
            </div>
        </div>
    );
}

export default DatePicker